"use client";

import cl from "./footer.module.css";
import Link from "next/link";
import Social from "@/components/UI/social/social";
import Copyright from "../copyright/copyright";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileLines,
    faClock,
    faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className={cl.footer}>
            <div className={cl.bottom_line}>
                <div className={cl.card}>
                    <div className={cl.icons_wrapper}>
                        <FontAwesomeIcon
                            className={cl.icons}
                            icon={faFileLines}
                        />
                    </div>
                    <div className={cl.front}>
                        <div className={cl.wrapper}>
                            <h3 className={cl.title}>Документы</h3>
                            <ul className={cl.bottom_item}>
                                <li>
                                    <Link
                                        href='/blog'
                                        className={cl.link}
                                        rel='nofollow'
                                    >
                                        Блог
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/privacy'
                                        className={cl.link}
                                        rel='nofollow'
                                    >
                                        Персональные данные
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/price_list'
                                        className={cl.link}
                                        rel='nofollow'
                                    >
                                        Тарифы
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cl.card}>
                    <div className={cl.icons_wrapper}>
                        <FontAwesomeIcon
                            className={cl.icons}
                            icon={faAddressBook}
                        />
                    </div>
                    <div className={cl.front}>
                        <div className={cl.wrapper}>
                            <h3 className={cl.title}>Контакты</h3>
                            <ul className={cl.bottom_item}>
                                <li>
                                    <Social />
                                </li>
                                <li>
                                    <Link
                                        href='mailto:starkmarketing-50@yandex.ru?subject=Important-mail:&body=Hello.'
                                        type='email'
                                        className={cl.link}
                                        rel='nofollow'
                                    >
                                        email: StarkMarketing-50@yandex.ru
                                    </Link>
                                </li>

                                <li>
                                    <p>
                                        адрес: Куздере, Кемер, Анталия, Турция
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cl.card}>
                    <div className={cl.icons_wrapper}>
                        <FontAwesomeIcon className={cl.icons} icon={faClock} />
                    </div>
                    <div className={cl.front}>
                        <div className={cl.wrapper}>
                            <h3 className={cl.title}>Часы работы</h3>
                            <ul className={cl.bottom_item}>
                                <li>
                                    <p>Пн - Пт: 09:00 - 21:00</p>
                                </li>
                                <li>
                                    <p>Сб: 09:00 - 19:00</p>
                                </li>
                                <li>
                                    <p>Вс: 09:00 - 14:00</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    );
}
