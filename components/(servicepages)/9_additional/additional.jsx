import Carousel from "@/components/UI/carousel/carousel";
import cl from "./additional.module.css";

export default function Additional({ additionals, title }) {
    return (
        <section className={cl.section}>
            <h2 className={cl.title}>{title}</h2>
            <Carousel data={additionals} />
        </section>
    );
}
