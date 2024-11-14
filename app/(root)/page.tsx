"use client"

import { useEffect, useState } from 'react';

const page = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check if dark mode is preferred
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // Set the initial value
        setIsDarkMode(mediaQuery.matches);

        // Listen for changes
        const handleChange = (event: any) => {
            setIsDarkMode(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        // Cleanup listener on component unmount
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <div style={{ background: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
            <h1>{isDarkMode ? 'Dark Mode is Enabled' : 'Light Mode is Enabled'}</h1>
        </div>
    );
}

export default page
