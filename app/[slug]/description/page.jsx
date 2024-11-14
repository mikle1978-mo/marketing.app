import { ServicesList } from "@/lib/services";
import cl from "./page.module.css";

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
            title: `${item.name} Этапы выполнения услуги`,
            description: ` Описание последовательности выполнения работ при оказании услуги: ${item.name} `,
            keywords: item?.keywords,
            openGraph: {
                images: ["/images/default_item.png"], // Добавьте изображение категории, если оно есть
            },
            alternates: {
                canonical: `${process.env.API_URL}/${item.slug}/description`,
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

export default function Description({ params }) {
    const item = ServicesList.find((item) => item.slug == params.slug);

    return (
        <main className={cl.main}>
            <h1>{item.name} </h1>
            <div className={cl.description}>
                {item.stages.map((i, index) => (
                    <div key={index} className={cl.stages}>
                        <h2>{i.stage_title}</h2>
                        <p>{i.stage_description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
