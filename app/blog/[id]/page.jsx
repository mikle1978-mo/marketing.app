import Article from "@/components/blog/article"; // Проверьте путь и имя
import { ArticlesList } from "@/lib/articles";
import cl from "./page.module.css";
import Scroll from "@/components/UI/scroll/scroll";
import Script from "next/script";
import { generateSchemaForArticle } from "@/helpers/schemaOrg";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const params = ArticlesList.map((article) => ({ id: article.id }));
    return params;
}

export async function generateMetadata({ params }) {
    const item = ArticlesList.find((item) => item.id === params.id);

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
            url: `${process.env.API_URL}/blog/${item.id}`,
            images: item.img ? [item.img] : ["/images/default_item.png"],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: item.title,
            description: item.meta_desc,
            image: item.img || `${process.env.API_URL}/images/default_item.png`,
            creator: item.author || "Автор не указан", // Имя автора
        },
        alternates: {
            canonical: `${process.env.API_URL}/blog/${item.id}`,
        },
    };
}

export default function ArticlePage({ params }) {
    const item = ArticlesList.find((item) => item.id === params.id);
    if (!item) {
        notFound();
    }

    const jsonLd = generateSchemaForArticle(item);

    return (
        <>
            <Script
                id='json-ld'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Article item={item} />
            <Scroll line={item.line} />
        </>
    );
}
