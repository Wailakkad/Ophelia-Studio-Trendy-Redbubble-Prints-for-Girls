/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.pinimg.com',
      'assets.aceternity.com', // The domain from your error
      'ih1.redbubble.net',    // Redbubble's image domain
      'm.media-amazon.com'    // Another common Redbubble domain
    ],
  },
}



module.exports = nextConfig;

