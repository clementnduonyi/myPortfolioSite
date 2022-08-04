/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,

  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
    BASE_URL: process.env.BASE_URL,
    PROJECT_API_URL: process.env.PROJECT_API_URL
  }
}


module.exports = nextConfig
                   
                  



// pass the modules you would like to see transpiled




