import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '100mb',
        }
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: { remotePatterns: [
            { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
            { protocol: 'https', hostname: 'covers.openlibrary.org' },
            { protocol: 'https', hostname: 'images.simonandschuster.com' },
        ]}
};

export default nextConfig;
