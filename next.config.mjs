/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL || "https://marketingstark.app/",
        FIRM_NAME: process.env.FIRM_NAME || "Marketing Stark",
        FIRM_EMAIL: process.env.FIRM_EMAIL || "Marketing Stark@yandex.ru",
        CHAT_ID: process.env.CHAT_ID || "-1001910999829",
        URI_API_TG:
            process.env.URI_API_TG ||
            `https://api.telegram.org/bot6071602927:AAHrz9Zz_U73G_1_YwxMjquPsGe5sC6WBAE/sendMessage`,
    },
};

export default nextConfig;

// https://marketing-three-pearl.vercel.app/
