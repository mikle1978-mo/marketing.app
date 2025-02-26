import cl from "../services.module.css";
import ImgCard from "../img_card";

export default function Problem({ problems, title }) {
    return (
        <section>
            <div className='container'>
                <h2 className='title2'>{title}</h2>
                <div className={cl.imgcard_place}>
                    {problems.map((problem, index) => (
                        <ImgCard key={index} item={problem} />
                    ))}
                </div>
            </div>
        </section>
    );
}
