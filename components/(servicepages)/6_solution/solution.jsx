import RotateCard from "../rotate_card";
import cl from "../services.module.css";

export default function Solution({ solutions, title }) {
    return (
        <section>
            <div className='container'>
                <h2>{title}</h2>
                <div className={cl.card_place}>
                    {solutions.map((solution, index) => (
                        <RotateCard key={index} {...solution} />
                    ))}
                </div>
            </div>
        </section>
    );
}
