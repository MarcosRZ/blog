/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['github.com', 'drive.google.com', 'gmvmiwnzkcvzkmqykvte.supabase.co']
  },
}

module.exports = nextConfig
