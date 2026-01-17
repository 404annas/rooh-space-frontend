import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// MARKER ICONS
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
            },
            () => {
                // fallback location (Karachi)
                setPosition([24.8607, 67.0011]);
            }
        );
    }, []);

    if (!position) {
        return (
            <div className="flex items-center justify-center h-[calc(100vh-80px)]">
                <p className="text-xl font-semibold">Locating you...</p>
            </div>
        );
    }

    return (
        <div className="h-[calc(100vh-80px)] w-full">
            <MapContainer
                center={position}
                zoom={14}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position}>
                    <Popup>
                        <span className="font-bold">You are here!</span> <br />
                        Finding nearby mosques...
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;