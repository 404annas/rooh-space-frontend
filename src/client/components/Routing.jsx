import L from "leaflet";
import "leaflet-routing-machine";
import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

export const Routing = ({ source, destination }) => {
    const map = useMap();
    const routingControlRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (!map || !source || !destination) return;

        // Cleanup previous control
        if (routingControlRef.current) {
            map.removeControl(routingControlRef.current);
        }

        // Initialize Routing Control
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(source[0], source[1]),
                L.latLng(destination[0], destination[1])
            ],
            lineOptions: {
                styles: [{ color: "#2563eb", weight: 6, opacity: 0.8 }]
            },
            createMarker: () => null,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,
            show: true, // BOSS: This enables the Detail Box/Instructions
            collapsible: true, // Allows user to minimize the box
            formatter: new L.Routing.Formatter({ units: 'metric', language: 'en' })
        }).addTo(map);

        routingControlRef.current = routingControl;

        return () => {
            if (routingControlRef.current && map) {
                map.removeControl(routingControlRef.current);
            }
        };
    }, [map, destination]); // Re-create only if mosque changes

    // DEBOUNCED UPDATE: This stops the "(canceled)" network flood
    useEffect(() => {
        if (routingControlRef.current && source) {
            // Clear previous pending update
            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            // Wait 1000ms (1 sec) after movement stops before asking server for new path
            timeoutRef.current = setTimeout(() => {
                routingControlRef.current.setWaypoints([
                    L.latLng(source[0], source[1]),
                    L.latLng(destination[0], destination[1])
                ]);
            }, 1000);
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [source]); // Only update when you move

    return null;
};