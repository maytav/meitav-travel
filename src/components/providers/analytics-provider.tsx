'use client';

import {Suspense, useEffect} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';
import {initAnalytics} from '@/lib/firebase';
import {logEvent} from 'firebase/analytics';

// רכיב פנימי שמשתמש ב-Params
function AnalyticsEvents() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const startAnalytics = async () => {
            const analytics = await initAnalytics();
            if (analytics) {
                const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
                logEvent(analytics, 'page_view', {page_path: url});
            }
        };
        startAnalytics();
    }, [pathname, searchParams]);

    return null;
}

// הרכיב הראשי שעוטף ב-Suspense
export function AnalyticsProvider() {
    return (
        <Suspense fallback={null}>
            <AnalyticsEvents/>
        </Suspense>
    );
}
