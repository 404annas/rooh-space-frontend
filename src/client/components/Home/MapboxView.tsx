import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Map, { Marker, Popup, Source, Layer, ViewState, MapRef } from "react-map-gl/mapbox";
import 'mapbox-gl/dist/mapbox-gl.css';
import type { Feature, Polygon } from 'geojson';
import MosqueLoader from "../../../components/common/MosqueLoader";
import { Plus, Minus, Locate, Layers, CheckCircle2, Navigation, UsersRound, Clock, Info, MapPin } from 'lucide-react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;

interface MapStyle {
    id: string;
    url: string;
}

interface Mosque {
    id: number;
    name: string;
    lat: number;
    lng: number;
    crowd: 'High' | 'Moderate' | 'Low';
    place: "Mosque" | "Room";
    nextPrayer: string;
    isVerified: boolean;
}

interface NavigationMetrics {
    distance: string;
    duration: number;
}

// interface GeoJSONFeature {
//     type: 'Feature';
//     geometry: {
//         type: 'Polygon';
//         coordinates: number[][][];
//     };
// }

// interface RouteGeometry {
//     type: 'Feature';
//     geometry: {
//         type: 'LineString';
//         coordinates: number[][];
//     };
// }

// Available Styles for the Layer Switcher
const MAP_STYLES: MapStyle[] = [
    { id: 'streets', url: 'mapbox://styles/mapbox/streets-v12' },
    { id: 'satellite', url: 'mapbox://styles/mapbox/satellite-streets-v12' },
    { id: 'dark', url: 'mapbox://styles/mapbox/dark-v11' }
];

const dummyMosques: Mosque[] = [
    { id: 1, name: "Jamia Masjid Al-Falah", lat: 24.9010, lng: 67.1950, crowd: "Low", place: "Mosque", nextPrayer: "Asr: 4:30 PM", isVerified: true },
    { id: 2, name: "Madina Mosque", lat: 24.9050, lng: 67.1850, crowd: "High", place: "Mosque", nextPrayer: "Asr: 4:25 PM", isVerified: false },
    { id: 3, name: "City Prayer Space (Mall)", lat: 24.8980, lng: 67.1910, crowd: "Moderate", place: "Room", nextPrayer: "Asr: 4:30 PM", isVerified: true }
];

const createGeoJSONCircle = (
    center: [number, number],
    radiusInKm: number,
    points = 64
): Feature<Polygon> => {
    const coords = { latitude: center[1], longitude: center[0] };
    const km = radiusInKm;
    const ret: number[][] = [];
    const distanceX = km / (211.32 * Math.cos((coords.latitude * Math.PI) / 180));
    const distanceY = km / 210.574;
    for (let i = 0; i < points; i++) {
        const theta = (i / points) * (2 * Math.PI);
        const x = distanceX * Math.cos(theta);
        const y = distanceY * Math.sin(theta);
        ret.push([coords.longitude + x, coords.latitude + y]);
    }
    ret.push(ret[0]);
    return { type: 'Feature', geometry: { type: 'Polygon', coordinates: [ret] }, properties: {}, };
}
    ;

const getBearing = (start: [number, number], end: [number, number]): number => {
    const startLat = (start[1] * Math.PI) / 180;
    const startLng = (start[0] * Math.PI) / 180;
    const endLat = (end[1] * Math.PI) / 180;
    const endLng = (end[0] * Math.PI) / 180;
    const y = Math.sin(endLng - startLng) * Math.cos(endLat);
    const x = Math.cos(startLat) * Math.sin(endLat) - Math.sin(startLat) * Math.cos(endLat) * Math.cos(endLng - startLng);
    return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
};

const MapboxView = () => {
    const navigate = useNavigate();
    const [viewState, setViewState] = useState<Partial<ViewState>>({
        latitude: 24.9179, longitude: 67.0855, zoom: 14, pitch: 0, bearing: 0
    });

    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    const [userHeading, setUserHeading] = useState<number>(0);
    const [initialSyncDone, setInitialSyncDone] = useState<boolean>(false);
    const [selectedMosque, setSelectedMosque] = useState<Mosque | null>(null);
    const [routeData, setRouteData] = useState<any>(null);
    const [instructions, setInstructions] = useState<string | null>(null);
    const [navigationMetrics, setNavigationMetrics] = useState<NavigationMetrics | null>(null);
    const [isNavigating, setIsNavigating] = useState<boolean>(false);

    // NEW: Map Style State
    const [styleIndex, setStyleIndex] = useState<number>(0);

    const mapRef = useRef<MapRef | null>(null);

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                const { latitude, longitude, heading } = pos.coords;
                const newPos: [number, number] = [longitude, latitude];
                setUserLocation(newPos);
                setUserHeading(heading || userHeading);

                if (!initialSyncDone) {
                    setViewState(prev => ({ ...prev, latitude, longitude }));
                    setInitialSyncDone(true);
                }

                if (isNavigating && mapRef.current) {
                    const targetBearing = selectedMosque ? getBearing(newPos, [selectedMosque.lng, selectedMosque.lat]) : 0;
                    mapRef.current.flyTo({
                        center: newPos,
                        pitch: 65,
                        zoom: 18,
                        bearing: heading || targetBearing,
                        duration: 2000,
                        essential: true
                    });
                    if (selectedMosque) getRoute(selectedMosque, newPos);
                }
            },
            (err: GeolocationPositionError) => console.error(err),
            { enableHighAccuracy: true }
        );
        return () => navigator.geolocation.clearWatch(watchId);
    }, [isNavigating, selectedMosque, initialSyncDone]);

    const getRoute = async (mosque: Mosque, currentPos: [number, number] | null = userLocation) => {
        if (!currentPos) return;
        const resp = await fetch(`https://api.mapbox.com/directions/v5/mapbox/walking/${currentPos[0]},${currentPos[1]};${mosque.lng},${mosque.lat}?steps=true&geometries=geojson&access_token=${MAPBOX_TOKEN}`);
        const data = await resp.json();
        if (!data.routes[0]) return;
        const route = data.routes[0];
        setRouteData(route.geometry);
        setInstructions(route.legs[0].steps[0].maneuver.instruction);
        setNavigationMetrics({ distance: (route.distance / 1000).toFixed(1), duration: Math.floor(route.duration / 60) });
    };

    const handleExitNavigation = () => {
        setIsNavigating(false);
        setRouteData(null);
        setSelectedMosque(null);
        if (mapRef.current) {
            mapRef.current.flyTo({ pitch: 0, bearing: 0, zoom: 14, duration: 2000 });
        }
    };

    // --- NEW: HANDLERS FOR TOP RIGHT BUTTONS ---
    const zoomIn = () => mapRef.current?.zoomIn();
    const zoomOut = () => mapRef.current?.zoomOut();
    const reCenter = () => {
        if (userLocation) {
            mapRef.current?.flyTo({ center: userLocation, zoom: 15, duration: 1500 });
        }
    };
    const toggleStyle = () => setStyleIndex((prev) => (prev + 1) % MAP_STYLES.length);

    if (!userLocation) return <MosqueLoader />;

    return (
        <div className="h-[calc(100vh-80px)] w-full relative overflow-hidden font-sans bg-[#e5e7eb]">

            {/* CUSTOM TOP-RIGHT CONTROLS */}
            <div className="absolute top-6 right-6 z-30 flex flex-col gap-2">
                {/* 1. Re-center Button */}
                <button onClick={reCenter} className="bg-white p-3 rounded-xl shadow-md hover:bg-gray-50 transition-all duration-300 active:scale-90 border border-gray-100">
                    <Locate />
                </button>

                {/* 2. Zoom Group */}
                <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                    <button onClick={zoomIn} className="p-3 hover:bg-gray-50 border-b border-gray-100 transition-all duration-300 active:scale-90 text-gray-600 text-xl font-bold"><Plus /></button>
                    <button onClick={zoomOut} className="p-3 hover:bg-gray-50 transition-all duration-300 active:scale-90 text-gray-600 text-xl font-bold"><Minus /></button>
                </div>

                {/* 3. Style Switcher */}
                <button onClick={toggleStyle} className="bg-white p-3 rounded-xl shadow-md hover:bg-gray-50 transition-all duration-300 active:scale-90 border border-gray-100">
                    <Layers />
                </button>
            </div>

            {/* TOP NAVIGATION PANEL */}
            {isNavigating && (
                <div className="absolute top-0 left-0 right-0 z-20 bg-[#15803d] text-white p-4 shadow-sm flex items-center gap-5 border-b border-white/20">
                    <div className="bg-white p-3 rounded-2xl shadow-inner">
                        <svg className="w-8 h-8 fill-[#15803d]" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
                    </div>
                    <div>
                        <p className="text-xs font-semibold opacity-80 uppercase tracking-wider">Next Step ?</p>
                        <h2 className="text-2xl orb font-bold tracking-tight leading-none">{instructions || "Proceed to route"}</h2>
                    </div>
                </div>
            )}

            {/* BOTTOM METRICS PANEL */}
            {isNavigating && navigationMetrics && (
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-white py-4 px-6 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-4xl orb font-black text-primary leading-none">{navigationMetrics.duration} <small className="text-lg orb text-secondary uppercase">min</small></span>
                        <p className="text-sm text-gray-500 orb font-semibold mt-1 tracking-tight">{navigationMetrics.distance} KM REMAINING</p>
                    </div>
                    <button onClick={handleExitNavigation} className="bg-[#ef4444] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-black uppercase orb shadow-sm transition-all duration-300 active:scale-90">
                        Exit
                    </button>
                </div>
            )}

            {/* Main Map */}
            <Map
                {...viewState}
                ref={mapRef}
                onMove={evt => setViewState(evt.viewState)}
                mapStyle={MAP_STYLES[styleIndex].url}
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                {!isNavigating && (
                    <Source id="circleSource" type="geojson" data={createGeoJSONCircle(userLocation, 5)}>
                        <Layer id="circleLayer" type="fill" paint={{ 'fill-color': '#15803d', 'fill-opacity': 0.08 }} />
                        <Layer id="circleBorder" type="line" paint={{ 'line-color': '#15803d', 'line-width': 2, 'line-dasharray': [3, 3] }} />
                    </Source>
                )}

                {routeData && (
                    <Source id="routeSource" type="geojson" data={{
                        type: 'Feature',
                        geometry: routeData,
                        properties: {}
                    }}>
                        <Layer id="routeLayer" type="line" paint={{ 'line-color': '#3b82f6', 'line-width': 5, 'line-opacity': 0.8 }} layout={{ 'line-join': 'round', 'line-cap': 'round' }} />
                    </Source>
                )}

                {/* Current Location - Marker */}
                <Marker longitude={userLocation[0]} latitude={userLocation[1]}>
                    {isNavigating ? (
                        <div style={{ transform: `rotate(${userHeading}deg)` }} className="transition-transform duration-500">
                            <svg width="50" height="50" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="#3b82f6" fillOpacity="0.2" />
                                <path d="M50 15L85 85L50 70L15 85L50 15Z" fill="#3b82f6" stroke="white" strokeWidth="4" />
                            </svg>
                        </div>
                    ) : (
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-500/30 rounded-full animate-ping" />
                            <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-2xl" />
                        </div>
                    )}
                </Marker>

                {/* Crowd Level */}
                {dummyMosques.map(mosque => (
                    <Marker key={mosque.id} longitude={mosque.lng} latitude={mosque.lat} onClick={e => {
                        e.originalEvent.stopPropagation();
                        setSelectedMosque(mosque);
                        getRoute(mosque);
                    }}>
                        <div className={`w-10 h-10 rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer transition-transform
                        ${mosque.crowd === 'High'
                                ? 'bg-red-500'
                                : mosque.crowd === 'Moderate'
                                    ? 'bg-orange-500'
                                    : 'bg-green-600'
                            }`}>
                            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 2L10 5H14L12 2Z" /><path d="M12 5C8.13 5 5 8.13 5 12V21H19V12C19 8.13 15.87 5 12 5ZM11 19H7V17H11V19ZM11 15H7V13H11V15ZM17 19H13V17H17V19ZM17 15H13V13H17V15Z" /></svg>
                        </div>
                    </Marker>
                ))}

                {/* Popup Box - Description */}
                {selectedMosque && !isNavigating && (
                    <Popup
                        longitude={selectedMosque.lng}
                        latitude={selectedMosque.lat}
                        anchor="bottom"
                        offset={25}
                        closeButton={false}
                        onClose={() => { setSelectedMosque(null); setRouteData(null); }}
                        maxWidth="320px"
                        className="mosque-popup-custom"
                    >
                        <div className="bg-white rounded-[28px] overflow-hidden shadow-2xl border border-gray-100">
                            {/* Header with Background/Image placeholder (Optional sleek touch) */}
                            <div className="h-2 bg-gradient-to-r from-primary to-secondary" />

                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-extrabold text-primary text-base leading-tight">
                                        {selectedMosque.name}
                                    </h3>
                                    {selectedMosque.isVerified ? (
                                        <CheckCircle2
                                            size={16}
                                            className="text-white fill-[#0095f6] flex-shrink-0"
                                        />
                                    ) : (
                                        <span title="Location not yet verified">
                                            <Info
                                                size={16}
                                                className="text-red-500 flex-shrink-0"
                                            />
                                        </span>
                                    )}
                                </div>

                                {/* Status Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {navigationMetrics && (
                                        <div className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs orb font-semibold uppercase tracking-tight">
                                            <Navigation size={12} />
                                            {navigationMetrics.duration} MINS
                                        </div>
                                    )}
                                    <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-tight orb ${selectedMosque.crowd === 'High' ? 'bg-red-50 text-red-600' :
                                        selectedMosque.crowd === 'Moderate' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                                        }`}>
                                        <UsersRound size={12} />
                                        {selectedMosque.crowd} Crowd
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    {selectedMosque.place === "Room" ? (
                                        <div className='flex items-center gap-2 bg-purple-50 text-purple-600 uppercase rounded-full font-semibold px-2.5 py-1 text-xs w-fit'>
                                            <MapPin size={12} />
                                            <p className='orb'>{selectedMosque.place}</p>
                                        </div>
                                    ) : (
                                        <div className='flex items-center gap-2 bg-blue-50 text-blue-600 uppercase rounded-full font-semibold px-2.5 py-1 text-xs w-fit'>
                                            <MapPin size={12} />
                                            <p className='orb'>{selectedMosque.place}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Details Section */}
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <Clock size={16} className="text-gray-400" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase text-gray-400 font-bold leading-none mb-0.5">Next Prayer</p>
                                            <p className="text-sm font-bold text-primary orb">{selectedMosque.nextPrayer}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Primary Action Button */}
                                <button
                                    onClick={() => setIsNavigating(true)}
                                    className="group w-full bg-[#15803d] hover:bg-[#14532d] text-white py-4 rounded-full font-bold text-xs uppercase shadow-sm shadow-green-200 transition-all duration-300 outline-none active:scale-95 flex items-center justify-center gap-2 orb"
                                >
                                    Start Walking
                                    <Navigation size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={() => navigate(`/space-detail/${selectedMosque.id}`)}
                                    className="mt-3 w-full bg-white hover:bg-gray-50 text-primary py-3.5 rounded-full font-bold text-xs uppercase border border-green-500 shadow-sm transition-all duration-300 outline-none active:scale-95 flex items-center justify-center gap-2 orb"
                                >
                                    Visit {selectedMosque.place}
                                    <MapPin size={16} />
                                </button>
                            </div>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    );
};

export default MapboxView;
