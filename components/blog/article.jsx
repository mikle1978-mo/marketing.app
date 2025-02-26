import cl from "./article.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Article({ item }) {
    return (
        <div className='container'>
            <article className={cl.article}>
                <div className={cl.header}>
                    <h1 className={cl.title}>{item.title}</h1>
                    <p className={cl.subtitle}>{item.subtitle}</p>
                    <p className={cl.date}>
                        Дата публикации:{" "}
                        {new Date(item.date).toLocaleDateString("ru-RU", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
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
                <div
                    className={cl.content}
                    dangerouslySetInnerHTML={{ __html: item.html }}
                ></div>
                <Link href='/blog' className={cl.goback}>
                    ⬅ назад
                </Link>
            </article>
        </div>
    );
}
