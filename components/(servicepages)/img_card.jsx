import Image from "next/image";
import cl from "./img_card.module.css";

export default function ImgCard({ item }) {
    return (
        <figure className={cl.figure}>
            <div className={cl.number}>{item.id}</div>
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
            </figcaption>
        </figure>
    );
}
