/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true, // Skip type checking during build
    },
};

export default nextConfig;
