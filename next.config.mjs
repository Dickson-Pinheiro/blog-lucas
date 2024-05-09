/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [{
        hostname: 'cms.lucasalvez.com.br',
        protocol: "https"
    }]
}};

export default nextConfig;
