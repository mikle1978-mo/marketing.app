import cl from "./whatsapp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsApp() {
    return (
        <a
            href='https://wa.me/message/P3KXH7AFMVV4C1'
            className={cl.whatsapp}
            aria-label='Ватсап: +905356062642'
            rel='nofollow'
        >
            <FontAwesomeIcon
                className={cl.icons}
                icon={faWhatsapp}
                alt='иконка телефона'
            />
            WhatsApp
            <p className={cl.lamp}></p>
        </a>
    );
}
