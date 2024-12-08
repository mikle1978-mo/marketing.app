"use client";

import cl from "./article.module.css";
import { useRouter } from "next/navigation";

export default function Article({ item }) {
    const router = useRouter();
    return (
        <article className={cl.article}>
            <header className={cl.header}>
                <h1 className={cl.title}>{item.title}</h1>
                <p className={cl.subtitle}>{item.subtitle}</p>
                <p className={cl.date}>Дата публикации: {item.date}</p>
            </header>
            <img className={cl.image} src={item.img} alt='Обложка статьи' />
            <section
                className={cl.content}
                dangerouslySetInnerHTML={{ __html: item.html }}
            ></section>
            <span onClick={() => router.back()} className={cl.goback}>
                ⬅ назад
            </span>
        </article>
    );
}
