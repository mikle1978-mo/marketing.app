import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faSquareEnvelope,
    faSquarePhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import {
    faTelegram,
    faWhatsapp,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import cl from "./social.module.css";

export default function Social() {
    return (
        <>
            <div className={cl.icons_line}>
                <a href='tel:+905356062642' target='_blank' className={cl.link}>
                    <FontAwesomeIcon
                        className={cl.icons}
                        icon={faSquarePhoneFlip}
                    />
                </a>
                <a
                    href='https://wa.me/905356062642'
                    target='_blank'
                    className={cl.link}
                >
                    <FontAwesomeIcon className={cl.icons} icon={faWhatsapp} />
                </a>
                {/* <a
                        href='mailto:moygromov19@gmail.com?subject=Important-mail:&body=Hello.'
                        type='email'
                        className={cl.link}
                        target='_blank'
                    >
                        <FontAwesomeIcon
                            className={cl.icons}
                            icon={faSquareEnvelope}
                        />
                    </a> */}
                <a
                    href='https://t.me/+905356062642'
                    target='_blank'
                    className={cl.link}
                >
                    <FontAwesomeIcon className={cl.icons} icon={faTelegram} />
                </a>
            </div>
        </>
    );
}
