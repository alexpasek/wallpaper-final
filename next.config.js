/** @type {import('next').NextConfig} */
const nextConfig = {
    // REMOVE: output: 'export',
    trailingSlash: true, // ok to keep
    images: { unoptimized: true }, // ok to keep
    outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;