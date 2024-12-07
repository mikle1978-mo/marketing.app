import cl from "./mistake.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faRotate } from "@fortawesome/free-solid-svg-icons";

export default function Mistake({ mistakes, title }) {
    return (
        <section className={cl.section}>
            <h2 className={cl.title}>{title}</h2>
            <div className={cl.mistakes}>
                {mistakes.map((mistake, index) => (
                    <div key={index} className={cl.card}>
                        <div className={cl.card_front}>
                            <div className={cl.card_inner}>
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    className={cl.icon}
                                />
                                <FontAwesomeIcon
                                    icon={faRotate}
                                    className={cl.icon_rotate}
                                />
                                <h3 className={cl.card_title}>
                                    {mistake.title}
                                </h3>
                            </div>
                        </div>
                        <div className={cl.card_back}>
                            <p>{mistake.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
