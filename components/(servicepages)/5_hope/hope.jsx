import cl from "./hope.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faRotate } from "@fortawesome/free-solid-svg-icons";

export default function Hope({ hopes, title }) {
    return (
        <section className={cl.section}>
            <h2 className={cl.title}>{title}</h2>
            <div className={cl.hopes}>
                {hopes.map((hope, index) => (
                    <div key={index} className={cl.card}>
                        <div className={cl.card_front}>
                            <div className={cl.card_inner}>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className={cl.icon}
                                />
                                <FontAwesomeIcon
                                    icon={faRotate}
                                    className={cl.icon_rotate}
                                />
                                <h3 className={cl.card_title}>{hope.title}</h3>
                            </div>
                        </div>
                        <div className={cl.card_back}>
                            <p>{hope.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
