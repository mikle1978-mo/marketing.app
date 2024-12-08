"use client";

import cl from "./article_item.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ArticleItem({ item }) {
    const router = useRouter();
    return (
        <figure
            className={cl.figure}
            onClick={() => router.push(`/blog/${item.id}`)}
        >
            <div className={cl.img_wrapper}>
                <Image
                    src={item.img}
                    alt={item.title}
                    className={cl.img}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    priority
                />
            </div>

            <figcaption className={cl.figcaption}>
                <h2 className={cl.title}>{item.title}</h2>
                <span>{item.date}</span>
            </figcaption>
        </figure>
    );
}
