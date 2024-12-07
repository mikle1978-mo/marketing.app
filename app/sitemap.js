import { ServicesList } from "@/lib/services";

export default async function sitemap() {
    try {
        // Создание записей для основных страниц услуг
        const serviceEntries = ServicesList.map(({ slug }) => ({
            url: `${process.env.API_URL}/${slug}`,
            lastModified: new Date().toISOString(),
        }));

        // Создание записей для общих страниц
        const staticEntries = [
            {
                url: `${process.env.API_URL}`,
            },
        ];

        // Финальная карта сайта
        return [
            ...staticEntries, // Общие страницы
            ...serviceEntries, // Основные страницы услуг
        ];
    } catch (error) {
        console.error("Ошибка при генерации sitemap:", error);
        return [];
    }
}
