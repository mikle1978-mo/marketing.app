export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/thanks"],
            },
            {
                userAgent: "Googlebot-Image",
                disallow: ["/images/"],
            },
        ],
        sitemap: `${process.env.API_URL}/sitemap.xml`,
    };
}
