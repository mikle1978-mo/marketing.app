export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/best/", "/price_list", "/privacy", "/thanks"],
        },
        sitemap: `${process.env.API_URL}/sitemap.xml`,
    };
}
