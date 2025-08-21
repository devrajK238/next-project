// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // required for static export
    images: { unoptimized: true }, // avoids next/image optimization on Netlify
    // Optional: skip lint blocking builds (use only if needed)
    // eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;