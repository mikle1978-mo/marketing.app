import HeadBlock from "@/components/(servicepages)/1_head_block/head_block";
import cl from "./page.module.css";
import { ServicesList } from "@/lib/services";
import Problem from "@/components/(servicepages)/2_problem/problem";
import Mistake from "@/components/(servicepages)/3_mistake/mistake";
import Pain from "@/components/(servicepages)/4_pain/pain";
import Hope from "@/components/(servicepages)/5_hope/hope";
import Solution from "@/components/(servicepages)/6_solution/solution";
import Action from "@/components/(servicepages)/7_action/action";
import Scroll from "@/components/UI/scroll/scroll";
import Additional from "@/components/(servicepages)/8_additional/additional";
import Script from "next/script";

export async function generateStaticParams() {
    const params = ServicesList.map((service) => ({ slug: service.slug }));
    return params;
}

export async function generateMetadata({ params }) {
    const item = ServicesList.find((item) => item.slug === params.slug);

    if (!item) {
        return {
            title: "Страница не найдена",
            description: "Извините, страница, которую вы ищете, не существует.",
            keywords: "Not found",
        };
    }

    return {
        metadataBase: new URL(process.env.API_URL),
        title: item.title,
        description: item.meta_desc,
        keywords: item?.keywords,
        openGraph: {
            title: item.title,
            description: item.meta_desc,
            url: `${process.env.API_URL}/${item.slug}`,
            images: item.img ? [item.img] : ["/images/default_item.png"],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: item.title,
            description: item.meta_desc,
            image: item.img || "/images/default_item.png",
        },
        alternates: {
            canonical: `${process.env.API_URL}/${item.slug}`,
        },
    };
}

export default function ServicePage({ params }) {
    const item = ServicesList.find((item) => item.slug === params.slug);
    const additionals = ServicesList.filter(
        (item) => item.slug !== params.slug
    );

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: item?.title || "Услуга", // Подстраховка на случай отсутствия данных
        description: item?.schema_desc || "Описание услуги недоступно",
        provider: {
            "@type": "Organization",
            name: "Marketing Stark",
            url: process.env.API_URL || "https://example.com", // Подстраховка, если API_URL отсутствует
            logo: `${process.env.API_URL || "https://example.com"}/logo.png`,
        },
        areaServed: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Турция",
            },
        },
        serviceType: item?.title || "Услуга",
        offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: item?.price || "100", // Значение по умолчанию
            url: `${process.env.API_URL || "https://example.com"}/${
                item?.slug || "service"
            }`,
            description: item?.schema_desc || "Описание предложения недоступно",
            availability: "https://schema.org/InStock",
        },
    };

    console.log(jsonLd);

    return (
        <>
            <Script
                id='json-ld'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className={cl.main}>
                <Scroll line={item?.line} />
                <HeadBlock item={item} />
                <Problem
                    problems={item?.problems}
                    title={item?.problem_title}
                />
                <Mistake
                    mistakes={item?.mistakes}
                    title={item?.mistake_title}
                />
                <Pain pains={item?.pains} title={item?.pain_title} />
                <Hope hopes={item?.hopes} title={item?.hope_title} />
                <Solution
                    solutions={item?.solutions}
                    title={item?.solution_title}
                />
                <Action actions={item?.actions} title={item?.action_title} />
                <Additional
                    additionals={additionals}
                    title={"Вам также может понадобиться"}
                />
                <Scroll line={item?.line} />
            </main>
        </>
    );
}
