import Article from "@/components/blog/article";
import Scroll from "@/components/UI/scroll/scroll";
import { ArticlesList } from "@/lib/articles";

export default function ArticlePage({ params }) {
    const item = ArticlesList.find((item) => item.id === Number(params.id));

    return (
        <>
            <Article item={item} />
            <Scroll line={item.line} />
        </>
    );
}
