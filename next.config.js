/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: ['cdn.sanity.io']
	},
  env:{
    sanity_project_id : "9a6odzje",
    sanity_token : "sklaCYpFvt7wpRAC409tUoMgW2s4FJAUIrSTBbWdXZ8SXXmkKS4fpyNhjHS8JpR72OSye8LWBuS5NLUQfgXbFC8KQM5xWfYAQRGpCGjxozZl7kOj9rg31mgjKcedBvnYA4Uailk9BCHxK2Fdl3MVPvBf496pyqGeGK2faglY8msN7HSzXSM4"
  }
}

module.exports = nextConfig
