import Carousel from "@/components/UI/carousel/carousel";
import cl from "./additional.module.css";

export default function Additional({ additionals, title }) {
    return (
        <section className='section'>
            <h2 className='title2'>{title}</h2>
            <Carousel data={additionals} />
        </section>
    );
}
