/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"cryptosea.com",
                protocol:"https"
            }
        ]
    }
};

export default nextConfig;
