"use client";

import cl from "./article.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Article({ item }) {
    const router = useRouter();
    return (
        <article className={cl.article}>
            <header className={cl.header}>
                <h1 className={cl.title}>{item.title}</h1>
                <p className={cl.subtitle}>{item.subtitle}</p>
                <p className={cl.date}>
                    Дата публикации:
                    {new Date(item.date).toLocaleDateString("ru-RU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
            </header>
            <div className={cl.imageWrapper}>
                <Image
                    className={cl.image}
                    src={item.img}
                    alt='Обложка статьи'
                    fill
                    priority // Опционально, для оптимизации загрузки
                    quality={90} // Качество изображения
                    style={{ objectFit: "cover", borderRadius: "0.5rem" }} // object-fit и стили для адаптации
                    placeholder='blur' // Эффект размытия при загрузке
                    blurDataURL={item.img} // URL для размытого изображения
                />
            </div>
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
