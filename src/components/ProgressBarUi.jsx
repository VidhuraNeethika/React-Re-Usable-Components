import React, { useEffect, useState, useRef } from 'react';

const ProgressBarUi = ({ title, percentage }) => {
    const [progress, setProgress] = useState(0);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Start the animation when the component is in view
                        setProgress(percentage);
                    } else {
                        // Reset the progress when the component goes out of view
                        setProgress(0);
                    }
                });
            },
            {
                threshold: 0.5, // Adjust this value based on when you want to trigger the animation
            }
        );

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => {
            if (progressBarRef.current) {
                observer.unobserve(progressBarRef.current);
            }
        };
    }, [percentage]);

    return (
        <div ref={progressBarRef}>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">{title}</span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-700 ease-in-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBarUi;
