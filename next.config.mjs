import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'mainaosama-portfolio.vercel.app'],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
