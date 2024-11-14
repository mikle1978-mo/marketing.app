import ServiceItem from "@/components/servise_item/servise_item";
import cl from "./page.module.css";
import { ServicesList } from "@/lib/services";

export async function generateMetadata({ params }) {
    try {
        const item = ServicesList.find((item) => item.slug == params.slug);

        if (!item) {
            return {
                title: "Реклама в интернете, контекстная реклама",
                description:
                    "Настройка рекламы в Yandex Direct, Google Ads, Яндекс Директ, Гугл Адс. Настройка контекстной рекламы. Ведение, оптимизация, аудит рекламных кампаний. CEO, СЕО оптимизация, разработка продающих лендингов, сайтов и сайтов для интернет магазинов",
            };
        }

        return {
            metadataBase: new URL(process.env.API_URL),
            title: item.name,
            description: item.desc,
            keywords: item?.keywords,
            openGraph: {
                images: item.img || ["/images/default_item.png"], // Добавьте изображение категории, если оно есть
            },
            alternates: {
                canonical: `${process.env.API_URL}/${item.slug}`,
            },
        };
    } catch (error) {
        console.error("Ошибка при получении категории:", error.message);
        return {
            title: "Реклама в интернете, контекстная реклама",
            description:
                "Настройка рекламы в Yandex Direct, Google Ads, Яндекс Директ, Гугл Адс. Настройка контекстной рекламы. Ведение, оптимизация, аудит рекламных кампаний. CEO, СЕО оптимизация, разработка продающих лендингов, сайтов и сайтов для интернет магазинов",
        };
    }
}

export default function ServicePage({ params }) {
    const item = ServicesList.find((item) => item.slug == params.slug);
    return (
        <main className={cl.main}>
            <ServiceItem item={item} />
        </main>
    );
}
