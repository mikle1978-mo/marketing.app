"use client";

import cl from "./footer.module.css";
import Link from "next/link";
import Social from "@/components/UI/social/social";
import Copyright from "../copyright/copyright";

export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className={cl.bottom_line}>
                    <div className={cl.card}>
                        <div className={cl.icons_wrapper}>
                            {/* <FontAwesomeIcon
                            className={cl.icons}
                            icon={faFileLines}
                        /> */}
                            <svg
                                aria-hidden='true'
                                className={cl.icons}
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 384 512'
                                width='2.5rem'
                                height='2.5rem'
                            >
                                <path
                                    fill='currentColor'
                                    d='M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z'
                                ></path>
                            </svg>
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
                            {/* <FontAwesomeIcon
                            className={cl.icons}
                            icon={faAddressBook}
                        /> */}
                            <svg
                                aria-hidden='true'
                                data-icon='address-book'
                                className={cl.icons}
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                                width='2.5rem'
                                height='2.5rem'
                            >
                                <path
                                    fill='currentColor'
                                    d='M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z'
                                ></path>
                            </svg>
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
                                            email: starkmarketing-50@yandex.ru
                                        </Link>
                                    </li>

                                    <li>
                                        <address className={cl.address}>
                                            адрес: Кемер, Анталия, Турция
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cl.card}>
                        <div className={cl.icons_wrapper}>
                            <svg
                                aria-hidden='true'
                                data-icon='clock'
                                className={cl.icons}
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                                width='2.5rem'
                                height='2.5rem'
                            >
                                <path
                                    fill='currentColor'
                                    d='M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'
                                ></path>
                            </svg>
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
            </div>
            <Copyright />
        </footer>
    );
}
