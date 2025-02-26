import RotateCard from "../rotate_card";
import cl from "../services.module.css";

export default function Mistake({ mistakes, title }) {
    let img = (
        <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='circle-xmark'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
        >
            <path
                fill='var(--secondary-1)'
                d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z'
            ></path>
        </svg>
    );
    return (
        <section>
            <div className='container'>
                <h2 className='title2'>{title}</h2>
                <div className={cl.card_place}>
                    {mistakes.map((mistake, index) => (
                        <RotateCard key={index} {...mistake} img={img} />
                    ))}
                </div>
            </div>
        </section>
    );
}
