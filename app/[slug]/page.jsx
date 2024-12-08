import HeadBlock from "@/components/(servicepages)/1_head_block/head_block";
import cl from "./page.module.css";
import { ServicesList } from "@/lib/services";
import Problem from "@/components/(servicepages)/2_problem/problem";
import Mistake from "@/components/(servicepages)/3_mistake/mistake";
import Pain from "@/components/(servicepages)/4_pain/pain";
import Hope from "@/components/(servicepages)/5_hope/hope";
import Solution from "@/components/(servicepages)/6_solution/solution";
import Action from "@/components/(servicepages)/7_action/action";
import Scroll from "@/components/UI/scroll/scroll";
import Additional from "@/components/(servicepages)/8_additional/additional";

export async function generateStaticParams() {
    const params = ServicesList.map((service) => ({ slug: service.slug }));
    return params;
}

export async function generateMetadata({ params }) {
    const item = ServicesList.find((item) => item.slug === params.slug);

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
            images: item.img || ["/images/default_item.png"],
        },
        alternates: {
            canonical: `${process.env.API_URL}/${item.slug}`,
        },
    };
}

export default function ServicePage({ params }) {
    const item = ServicesList.find((item) => item.slug === params.slug);
    const additionals = ServicesList.filter(
        (item) => item.slug !== params.slug
    );

    return (
        <main className={cl.main}>
            <Scroll line={item?.line} />
            <HeadBlock item={item} />
            <Problem problems={item?.problems} title={item?.problem_title} />
            <Mistake mistakes={item?.mistakes} title={item?.mistake_title} />
            <Pain pains={item?.pains} title={item?.pain_title} />
            <Hope hopes={item?.hopes} title={item?.hope_title} />
            <Solution
                solutions={item?.solutions}
                title={item?.solution_title}
            />
            <Action actions={item?.actions} title={item?.action_title} />
            <Additional
                additionals={additionals}
                title={"Вам также может понадобиться"}
            />
            <Scroll line={item?.line} />
        </main>
    );
}
