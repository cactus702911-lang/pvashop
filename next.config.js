
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Assuming static export or simple hosting initially, safer for migration
  }
}

export default nextConfig
