export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/thanks"],
        },
        sitemap: `${process.env.API_URL}/sitemap.xml`,
    };
}
