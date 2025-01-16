import cl from "./page.module.css";
import MainList from "../components/mainlist/mainlist";
import Script from "next/script";
import { CollectionPage, ContactPoint } from "@/helpers/schemaOrg";

export default function Home() {
    const jsonLd = [
        ContactPoint,
        CollectionPage,
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Marketing Stark",
            url: "https://marketingstark.app",
            logo: "https://marketingstark.app/logo.png",
            description:
                "Разработка современных сайтов. Создание лендингов, корпоративных сайтов и сайтов для интернет магазинов. СЕО оптимизация и продвижение в интернете. Настройка рекламы в Google и Yandex. Ведение, оптимизация, аудит рекламных кампаний.",
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
    ];
    return (
        <>
            <Script
                id='json-ld'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className={cl.main}>
                <div className={cl.title}>
                    <h1>Цифровой маркетинг для бизнеса</h1>
                    <p>- всё, что нужно для интернет продвижения</p>
                </div>
                <MainList />
            </main>
        </>
    );
}
