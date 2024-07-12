import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const SampleMap = () => {
    const mapContainerRef = useRef();
    const mapRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidmlkaHVyYSIsImEiOiJjbHlndjloM2swNzQwMm1zOTdsNGoydWllIn0.9attYVUYSTk435vGt2VyHg';
        // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [80.3496093, 7.4542373],
            zoom: 2,
            style: 'mapbox://styles/vidhura/clyguj0sr00us01pnhq8t0822',
        });

        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el)
            .setLngLat([80.3496093, 7.4542373])
            .addTo(mapRef.current);
        
        return () => {
            mapRef.current.remove();
        };
    });

    return (
        <div className='mt-16'>
            <h2 className='mb-5 font-bold'>Map Box Map</h2>

            <div
                style={{height: 200}}
                ref={mapContainerRef}
                className="rounded-2xl overflow-clip mb-20 relative"
            >
                <div
                    className='absolute flex flex-col bottom-0 left-0 z-10 bg-[#00000042] rounded-md text-white p-4  backdrop-blur-lg translate-x-2 -translate-y-2 shadow'>
                    <span className='text-gray-300'>Location</span>
                    <span className='text-[16px] font-bold'>Kurunegala, Sri Lanka</span>
                </div>
            </div>
        </div>
    );
};

export default SampleMap;