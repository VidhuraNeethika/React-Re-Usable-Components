import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import dotenv from 'dotenv';

dotenv.config();
const SampleMap = () => {
    const mapContainerRef = useRef();
    const mapRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [80.3496093, 7.4542373],
            zoom: 2,
            style: 'mapbox://styles/vidhura/clyguj0sr00us01pnhq8t0822',
        });

        const marker = new mapboxgl.Marker()
            .setLngLat([80.3496093, 7.4542373])
            .addTo(mapRef.current);
        
        return () => {
            mapRef.current.remove();
        };
    });

    return (
        <div
            style={{ height: 200}}
            ref={mapContainerRef}
            className="rounded-2xl shadow-lg overflow-clip"
        />
    );
};

export default SampleMap;