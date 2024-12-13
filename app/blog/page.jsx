import cl from "./page.module.css";
import ArticlesListComponent from "@/components/blog/articleslist";

export const metadata = {
    metadataBase: new URL(process.env.API_URL),
    title: "Блог о рекламе - MarketingStark",
    description: "Полезные статьи про рекламу MarketingStark",
    alternates: {
        canonical: `${process.env.API_URL}/blog`,
    },
};

export default function Blog() {
    return (
        <>
            <section className={cl.blog}>
                <h1>Полезные статьи о рекламе и не только</h1>
                <ArticlesListComponent />
            </section>
        </>
    );
}
