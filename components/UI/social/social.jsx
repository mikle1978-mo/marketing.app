import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhoneFlip } from "@fortawesome/free-solid-svg-icons";
import {
    faTelegram,
    faWhatsapp,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import cl from "./social.module.css";

export default function Social() {
    return (
        <div className={cl.icons_line}>
            <a
                href='tel:+905356062642'
                className={cl.link}
                aria-label='Позвонить: +905356062642'
                rel='nofollow'
            >
                <FontAwesomeIcon
                    className={cl.icons}
                    icon={faSquarePhoneFlip}
                    alt='иконка телефона'
                />
            </a>
            <a
                href='https://wa.me/message/P3KXH7AFMVV4C1'
                className={cl.link}
                aria-label='Ватсап: +905356062642'
                rel='nofollow'
            >
                <FontAwesomeIcon
                    className={cl.icons}
                    icon={faWhatsapp}
                    alt='иконка телефона'
                />
            </a>
            {/* <a
                        href='mailto:moygromov19@gmail.com?subject=Important-mail:&body=Hello.'
                        type='email'
                        className={cl.link}
                        
                    >
                        <FontAwesomeIcon
                            className={cl.icons}
                            icon={faSquareEnvelope}
                        />
                    </a> */}
            <a
                href='https://t.me/+905356062642'
                className={cl.link}
                aria-label='Телеграмм: +905356062642'
                rel='nofollow'
            >
                <FontAwesomeIcon
                    className={cl.icons}
                    icon={faTelegram}
                    alt='иконка телеграм'
                />
            </a>
            <a
                href='https://www.instagram.com/marketingstark_app/'
                className={cl.link}
                aria-label='Инстаграм: https://www.instagram.com/marketingstark_app/'
                rel='nofollow'
            >
                <FontAwesomeIcon
                    className={cl.icons}
                    icon={faInstagram}
                    alt='иконка инстаграм'
                />
            </a>
        </div>
    );
}
