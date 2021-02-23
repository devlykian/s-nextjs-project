const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')

const nextConfig = {}

module.exports = withPlugins([withOptimizedImages], nextConfig)
