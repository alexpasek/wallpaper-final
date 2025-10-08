// const path = require("path");
// /** @type {import('next').NextConfig} */
// module.exports = {
//     output: "export",
//     trailingSlash: true,
//     images: { unoptimized: true },
//     outputFileTracingRoot: __dirname,
// };
// 
// 
/** @type {import('next').NextConfig} */
const nextConfig = {
    // DO NOT set: output: 'export'
    trailingSlash: true,
    images: { unoptimized: true },
    outputFileTracingRoot: __dirname,
};
module.exports = nextConfig;