import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: 'atozionwebdesign-portfolio-prod1.s3.us-east-1.amazonaws.com'
    }]
    
  }  
};

export default nextConfig;
