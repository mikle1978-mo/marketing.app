import cl from "./pain.module.css";

export default function Pain({ pains, title }) {
    return (
        <section className={cl.section}>
            <h2 className={cl.title}>{title}</h2>
            <div
                className={cl.pains}
                dangerouslySetInnerHTML={{ __html: pains }}
            />
        </section>
    );
}
