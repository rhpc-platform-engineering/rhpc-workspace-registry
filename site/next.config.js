/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'RHPC Workspace Registry',
    description: 'The official store for RHPC supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.robusthpc.site/',
    contactUrl: 'https://support.robusthpc.com/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
