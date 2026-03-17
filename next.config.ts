import type {NextConfig} from 'next';
import withSerwistInit from '@serwist/next';
import {PHASE_DEVELOPMENT_SERVER} from 'next/constants';

const withSerwist = withSerwistInit({
    swSrc: 'src/app/sw.ts',
    swDest: 'public/sw.js',
});

export default function nextConfig(phase: string): NextConfig {
    const baseConfig: NextConfig = {
        output: 'export',
        images: {
            dangerouslyAllowSVG: true,
            unoptimized: true,
        },
        trailingSlash: true,
        reactCompiler: true,
    };

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return baseConfig;
    }

    return withSerwist(baseConfig);
}
