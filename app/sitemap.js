import { ServicesList } from "@/lib/services";
import { ArticlesList } from "@/lib/articles";

export default async function sitemap() {
    try {
        // Создание записей для основных страниц услуг
        const serviceEntries = ServicesList.map(({ slug }) => ({
            url: `${process.env.API_URL}/${slug}`,
            lastModified: new Date().toISOString(),
        }));

        // Создание записей для страниц блога
        const blogEntries = ArticlesList.map(({ id }) => ({
            url: `${process.env.API_URL}/blog/${id}`,
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
            ...blogEntries, // Страницы блога
        ];
    } catch (error) {
        console.error("Ошибка при генерации sitemap:", error);
        return [];
    }
}
