import cl from "./rotate_card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

export default function RotateCard({ title, description, img, number }) {
    return (
        <div className={cl.card_rotate}>
            <div className={cl.card_front}>
                <div className={cl.card_inner}>
                    {number ? (
                        <p className={cl.number}>{number}</p>
                    ) : (
                        <div className={cl.icon}>{img}</div>
                    )}
                    <FontAwesomeIcon
                        icon={faRotate}
                        className={cl.icon_rotate}
                    />
                    <h3 className={cl.card_title}>{title}</h3>
                </div>
            </div>
            <div className={cl.card_back}>
                <p>{description}</p>
            </div>
        </div>
    );
}
