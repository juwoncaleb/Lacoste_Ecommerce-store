/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{

  },
  images :{
    domains:[
      'res.cloudinary.com'
    ]
  }
}

module.exports = nextConfig
