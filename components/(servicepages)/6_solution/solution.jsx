import cl from "./solution.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faRotate } from "@fortawesome/free-solid-svg-icons";

export default function Solution({ solutions, title }) {
    return (
        <section className={cl.section}>
            <h2 className={cl.title}>{title}</h2>
            <div className={cl.solutions}>
                {solutions.map((solution, index) => (
                    <details key={index} className={cl.card}>
                        <summary className={cl.card_front}>
                            <h3 className={cl.card_title}>{solution.title}</h3>{" "}
                            <span className={cl.number}>{solution.number}</span>
                        </summary>
                        <div className={cl.card_back}>
                            <p>{solution.description}</p>
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
