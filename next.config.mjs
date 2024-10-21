/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: '**',
				protocol: 'https'
			},
			{
				hostname: '**',
				protocol: 'http'
			}
		]
	},
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'ru', 'kg']
	}
}

export default nextConfig
