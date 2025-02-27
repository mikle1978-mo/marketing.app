import cl from "../services.module.css";
import ImgCard from "../img_card";

export default function Pain({ pains, title }) {
    return (
        <section>
            <div className='container'>
                <h2 className='title2'>{title}</h2>
                <div className={cl.imgcard_place}>
                    {pains.map((pain, index) => (
                        <ImgCard key={index} item={pain} />
                    ))}
                </div>
            </div>
        </section>
    );
}
