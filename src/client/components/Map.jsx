import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'react-leaflet-cluster/dist/assets/MarkerCluster.css';
import 'react-leaflet-cluster/dist/assets/MarkerCluster.Default.css';
import { Routing } from "./Routing";
import MosqueLoader from "../../components/common/MosqueLoader";
import { useNavigate } from "react-router-dom";

// --- ICONS SETUP ---
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { SearchField } from "./SearchField";

const userIcon = L.icon({
    iconUrl: markerIcon, shadowUrl: markerShadow, iconSize: [25, 41], iconAnchor: [12, 41],
});

const getMosqueIcon = (crowd) => {
    const colorClass = crowd === 'High' ? '#dc2626' : crowd === 'Moderate' ? '#f97316' : '#16a34a';
    return L.divIcon({
        html: `<div style="background-color: ${colorClass};" class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6 font-bold">
                <path d="M12 2L10 5H14L12 2Z" /><path d="M12 5C8.13 5 5 8.13 5 12V21H19V12C19 8.13 15.87 5 12 5ZM11 19H7V17H11V19ZM11 15H7V13H11V15ZM17 19H13V17H17V19ZM17 15H13V13H17V15Z" />
            </svg>
        </div>`,
        className: "", iconSize: [40, 40], iconAnchor: [20, 40],
    });
};

const dummyMosques = [
    { id: 1, name: "Jamia Masjid Al-Falah", lat: 24.9010, lng: 67.1950, crowd: "Low", nextPrayer: "Asr: 4:30 PM", isVerified: true },
    { id: 2, name: "Madina Mosque", lat: 24.9050, lng: 67.1850, crowd: "High", nextPrayer: "Asr: 4:25 PM", isVerified: false },
    { id: 3, name: "City Prayer Space (Mall)", lat: 24.8980, lng: 67.1910, crowd: "Moderate", nextPrayer: "Asr: 4:30 PM", isVerified: true }
];

// const dummyMosques = [
//     { id: 1, name: "Jamia Masjid Bait-ul-Mukarram", lat: 24.9155, lng: 67.0890, crowd: "Low", nextPrayer: "Asr: 4:30 PM", isVerified: true },
//     { id: 2, name: "Madina Mosque (Block 13)", lat: 24.9210, lng: 67.0820, crowd: "High", nextPrayer: "Asr: 4:25 PM", isVerified: false },
//     { id: 3, name: "Askari IV Prayer Hall", lat: 24.9120, lng: 67.0860, crowd: "Moderate", nextPrayer: "Asr: 4:30 PM", isVerified: true },
//     { id: 4, name: "Civic Center Masjid", lat: 24.9195, lng: 67.0760, crowd: "Low", nextPrayer: "Asr: 4:30 PM", isVerified: true }
// ];

const AutoCenter = ({ pos, isFollowing }) => {
    const map = useMap();
    const lastPosRef = useRef(null);

    useEffect(() => {
        if (pos && isFollowing) {
            const latDiff = lastPosRef.current ? Math.abs(lastPosRef.current[0] - pos[0]) : 1;
            const lngDiff = lastPosRef.current ? Math.abs(lastPosRef.current[1] - pos[1]) : 1;
            // Only re-center if user moved ~5 meters
            if (latDiff > 0.00004 || lngDiff > 0.00004) {
                map.panTo(pos, { animate: true, duration: 1.0 });
                lastPosRef.current = pos;
            }
        }
    }, [pos, isFollowing, map]);
    return null;
};

const Map = () => {
    const [position, setPosition] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [isFollowing, setIsFollowing] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
            },
            (err) => {
                console.error(err);
                if (!position) setPosition([24.9179251, 67.0855616]);
            },
            { enableHighAccuracy: false, timeout: 5000, maximumAge: 10000 }
        );
        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    if (!position) return <MosqueLoader />;

    return (
        <div className="h-[calc(100vh-80px)] w-full relative">
            <div className="absolute top-4 left-14 z-[1000] bg-white p-3 rounded-lg shadow-md border-l-4 border-green-600">
                <h2 className="font-bold text-gray-800 text-sm leading-tight">Nearby Spaces</h2>
                <p className="text-[10px] text-gray-500 font-medium tracking-tight">
                    Showing {dummyMosques.filter(m => m.isVerified).length} Verified Spaces
                </p>
            </div>

            <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`absolute bottom-24 right-4 z-[1000] p-3 rounded-full shadow-xl border-2 transition-all active:scale-90 ${isFollowing ? 'bg-blue-600 text-white border-blue-300' : 'bg-white text-gray-600 border-gray-100'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            </button>

            <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <AutoCenter pos={position} isFollowing={isFollowing} />
                <SearchField />
                <Circle center={position} radius={1500} pathOptions={{ color: '#15803d', fillColor: '#15803d', fillOpacity: 0.2 }} />

                {selectedDestination && <Routing source={position} destination={selectedDestination} />}

                <Marker position={position} icon={userIcon}><Popup>You are here</Popup></Marker>

                <MarkerClusterGroup chunkedLoading maxClusterRadius={100}>
                    {dummyMosques.map((mosque) => (
                        <Marker key={mosque.id} position={[mosque.lat, mosque.lng]} icon={getMosqueIcon(mosque.crowd)}>
                            <Popup>
                                <div className="p-1 min-w-[150px]">
                                    <div className="flex items-start gap-1 mb-1">
                                        <h3 className="font-bold text-sm text-gray-800 leading-tight">{mosque.name}</h3>
                                        {mosque.isVerified && <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.24.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
                                    </div>
                                    <p className="text-[11px] text-gray-500 mb-2 font-medium">{mosque.nextPrayer}</p>
                                    <div className="flex flex-col gap-2">
                                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${mosque.isVerified ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>{mosque.isVerified ? "VERIFIED SPACE" : "COMMUNITY REPORTED"}</span>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${mosque.crowd === 'High' ? 'bg-red-100 text-red-700' : mosque.crowd === 'Moderate' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>Crowd: {mosque.crowd}</span>
                                    </div>
                                    <button onClick={() => { setSelectedDestination([mosque.lat, mosque.lng]); setIsFollowing(true); }} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-[10px] py-2.5 rounded font-bold uppercase transition-all shadow-sm">Get Directions</button>
                                    <button onClick={() => { window.scrollTo(0, 0); navigate("/") }} className="mt-2 w-full bg-white hover:bg-gray-50 text-gray-700 text-[10px] py-2.5 rounded font-bold uppercase border border-gray-300 transition-all shadow-sm">Explore Space</button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>

            {selectedDestination && (
                <button onClick={() => setSelectedDestination(null)} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[1000] bg-red-600 text-white px-8 py-2.5 rounded-full shadow-sm font-bold hover:bg-red-700 transition-all duration-300 active:scale-95 text-sm uppercase tracking-wide">Clear Route</button>
            )}
        </div>
    );
};

export default Map;