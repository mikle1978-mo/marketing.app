import cl from "./articleslist.module.css";
import ArticleItem from "./article_item";
import { ArticlesList } from "@/lib/articles";

export default function ArticlesListComponent() {
    return (
        <section className={cl.articles_list}>
            {ArticlesList.map((item) => (
                <ArticleItem item={item} key={item.id} />
            ))}
        </section>
    );
}
