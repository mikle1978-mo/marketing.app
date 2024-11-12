import { ServicesList } from "@/lib/services";
import cl from "./page.module.css";

export default function Description({ params }) {
    const item = ServicesList.find((item) => item.slug == params.slug);

    return (
        <>
            <h1>{item.name} </h1>
            <div className={cl.description}>
                {item.stages.map((i, index) => (
                    <div key={index} className={cl.stages}>
                        <h2>{i.stage_title}</h2>
                        <p>{i.stage_description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
