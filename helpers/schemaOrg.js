export function generateSchemaForService(item) {
    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Marketing Stark",
            url: "https://marketingstark.app",
            logo: "https://marketingstark.app/logo.png",
            description:
                "Настройка рекламы в Yandex Direct, Google Ads, Яндекс Директ, Гугл Адс. Настройка контекстной рекламы. Ведение, оптимизация, аудит рекламных кампаний. CEO, СЕО оптимизация, разработка продающих лендингов, сайтов и сайтов для интернет магазинов",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Кемер, Aнталия, Турция",
                addressCountry: "TR",
                streetAddress: "Куздере",
                postalCode: "07982",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90 535 606 2642",
                contactType: "customer service",
                areaServed: "Турция",
            },
            sameAs: ["https://www.instagram.com/marketingstark_app/"],
        },
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: item?.title || "Услуга",
            description: item?.meta_desc || "Описание услуги недоступно",
            image:
                item?.img ||
                `${
                    process.env.API_URL || "https://example.com"
                }/default_item.png`,
            brand: {
                "@type": "Brand",
                name: "MarketingStark",
            },
            provider: {
                "@type": "Organization",
                name: "Marketing Stark",
                url: process.env.API_URL || "https://example.com",
                logo: `${
                    process.env.API_URL || "https://example.com"
                }/logo.png`,
            },
            areaServed: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Турция",
                },
            },
            serviceType: item?.title || "Товар",
            offers: {
                "@type": "Offer",
                priceCurrency: item?.currency || "USD",
                price: item?.price || 100,
                url: `${process.env.API_URL || "https://example.com"}/${
                    item?.slug || "service"
                }`,
                description:
                    item?.meta_desc || "Описание предложения недоступно",
                priceValidUntil: "2025-12-31",
                availability: "https://schema.org/InStock",
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "25",
            },
        },
    ];

    return schema;
}
export function generateSchemaForArticle(item) {
    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Marketing Stark",
            url: "https://marketingstark.app",
            logo: "https://marketingstark.app/logo.png",
            description:
                "Настройка рекламы в Yandex Direct, Google Ads, Яндекс Директ, Гугл Адс. Настройка контекстной рекламы. Ведение, оптимизация, аудит рекламных кампаний. CEO, СЕО оптимизация, разработка продающих лендингов, сайтов и сайтов для интернет магазинов",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Кемер, Aнталия, Турция",
                addressCountry: "TR",
                streetAddress: "Куздере",
                postalCode: "07982",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90 535 606 2642",
                contactType: "customer service",
                areaServed: "Турция",
            },
            sameAs: ["https://www.instagram.com/marketingstark_app/"],
        },
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: item.title || "Заголовок",
            author: {
                "@type": "Person",
                name: item.author || "Автор не указан",
            },
            publisher: {
                "@type": "Organization",
                name: "MarketingStark",
                logo: {
                    "@type": "ImageObject",
                    url: `${process.env.API_URL}/logo.png`,
                },
            },
            datePublished: item?.date
                ? new Date(item.date).toISOString()
                : new Date().toISOString(),
            dateModified: item?.date_modified
                ? new Date(item.date_modified).toISOString()
                : new Date().toISOString(),
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${process.env.API_URL}/blog/${item.id}`,
            },
            description: item.meta_desc || "Описание отсутстует",
            image: item.img || `${process.env.API_URL}/images/default_item.png`,
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "25",
            },
        },
    ];

    return schema;
}
