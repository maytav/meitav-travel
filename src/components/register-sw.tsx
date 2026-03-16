'use client';

import {useEffect} from 'react';

export default function RegisterSW() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js', {
                scope: '/',
                updateViaCache: 'none',
            }).catch((error) => {
                console.error('SW registration failed:', error);
            });
        }
    }, []);

    return null;
}
