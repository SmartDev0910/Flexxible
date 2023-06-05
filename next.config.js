/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "",
    GRAFBASE_API_URL: process.env.GRAFBASE_API_URL || "",
    GRAFBASE_API_KEY: process.env.GRAFBASE_API_KEY || "",
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME || "",
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "",
    CLOUDINARY_API_SECRETS: process.env.CLOUDINARY_API_SECRETS || "",
  },
};

module.exports = nextConfig;
