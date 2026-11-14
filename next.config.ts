/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  allowedDevOrigins: ['192.168.0.49', '192.168.0.47'],
};

module.exports = nextConfig;
