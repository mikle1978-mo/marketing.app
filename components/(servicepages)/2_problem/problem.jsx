import cl from "../services.module.css";

export default function Problem({ problems, title }) {
    return (
        <section className='section'>
            <h2 className='title2'>{title}</h2>
            <div
                className={cl.imgcard_place}
                dangerouslySetInnerHTML={{ __html: problems }}
            />
        </section>
    );
}
