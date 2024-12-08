import Article, {
    metadata as articleMetadata,
} from "@/components/blog/article"; // Проверьте путь и имя
import { ArticlesList } from "@/lib/articles";
import cl from "./page.module.css";
import Scroll from "@/components/UI/scroll/scroll";

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
        title: item.name,
        description: item.meta_desc,
        keywords: item?.keywords,
        openGraph: {
            images: item.img || ["/images/default_item.png"],
        },
        alternates: {
            canonical: `${process.env.API_URL}/blog/${item.slug}`,
        },
    };
}

export default function ArticlePage({ params }) {
    const item = ArticlesList.find((item) => item.id === params.id);
    if (!item) {
        return <p>Статья не найдена</p>;
    }

    return (
        <>
            <Article item={item} />
            <Scroll line={item.line} />
        </>
    );
}
