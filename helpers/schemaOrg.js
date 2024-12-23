export const ContactPoint = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    email: "StarkMarketing-50@yandex.ru",
    telephone: "+905356062642",
    contactType: "Sales",
    areaServed: "TR",
    availableLanguage: ["Russian", "English"],
    sameAs: ["https://wa.me/905356062642", "https://t.me/+905356062642"],
};

export const CollectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Наши услуги",
    about: [
        {
            "@type": "Service",
            name: "Настройка Google Ads",
            url: "https://markeitngsrark.app/google_setting",
        },
        {
            "@type": "Service",
            name: "Ведение Google Ads",
            url: "https://markeitngsrark.app/google_management",
        },
        {
            "@type": "Service",
            name: "Опримизация Google Ads",
            url: "https://markeitngsrark.app/google_optimization",
        },
        {
            "@type": "Service",
            name: "Аудит Google Ads",
            url: "https://markeitngsrark.app/google_audit",
        },
        {
            "@type": "Service",
            name: "Настройка ЯДирект",
            url: "https://markeitngsrark.app/yandex_setting",
        },
        {
            "@type": "Service",
            name: "Ведение ЯДирект",
            url: "https://markeitngsrark.app/yandex_management",
        },
        {
            "@type": "Service",
            name: "Оптимизация ЯДирект",
            url: "https://markeitngsrark.app/yandex_optimization",
        },
        {
            "@type": "Service",
            name: "Аудит ЯДирект",
            url: "https://markeitngsrark.app/yandex_audit",
        },
        {
            "@type": "Service",
            name: "Создание лендингов",
            url: "https://markeitngsrark.app/landing",
        },
        {
            "@type": "Service",
            name: "Создание сайтов",
            url: "https://markeitngsrark.app/website",
        },
        {
            "@type": "Service",
            name: "Создание интернет-магазинов",
            url: "https://markeitngsrark.app/ecomm",
        },
        {
            "@type": "Service",
            name: "СЕО оптимизация",
            url: "https://markeitngsrark.app/seo",
        },
    ],
};
export function generateSchemaForService(item) {
    const schema = [
        ContactPoint,
        CollectionPage,
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Marketing Stark",
            url: "https://marketingstark.app",
            logo: "https://marketingstark.app/logo.png",
            description:
                "Настройка рекламы в Yandex Direct, Google Ads, Яндекс Директ, Гугл Адс. Настройка контекстной рекламы. Ведение, оптимизация, аудит рекламных кампаний. SEO, СЕО оптимизация, разработка продающих лендингов, сайтов и интернет-магазинов",
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
                name: "Marketing Stark",
            },
            offers: {
                "@type": "Offer",
                priceCurrency: item?.currency || "USD",
                price: item?.price || 100,
                url: `${process.env.API_URL || "https://example.com"}/${
                    item?.slug || "service"
                }`,
                description:
                    item?.meta_desc || "Описание предложения недоступно",
                priceValidUntil: item?.priceValidUntil || "2025-12-31",
                availability: "https://schema.org/InStock",
                hasMerchantReturnPolicy: {
                    "@type": "MerchantReturnPolicy",
                    returnPolicyCategory: "https://schema.org/NoRefunds",
                    applicableCountry: ["TR", "RU"],
                },
                shippingDetails: {
                    "@type": "OfferShippingDetails",
                    doesNotShip: true,
                },
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
        ContactPoint,
        CollectionPage,
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
            description: item.meta_desc || "Описание отсутствует",
            image: item.img || `${process.env.API_URL}/images/default_item.png`,
        },
    ];

    return schema;
}
