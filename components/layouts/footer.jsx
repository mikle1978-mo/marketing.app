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
                            <svg
                                aria-hidden='true'
                                data-icon='text-document'
                                className={cl.icons}
                                role='img'
                                width='32'
                                height='32'
                                viewBox='0 0 32 32'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M18.6667 2.66663H8.00004C7.2928 2.66663 6.61452 2.94758 6.11442 3.44767C5.61433 3.94777 5.33337 4.62605 5.33337 5.33329V26.6666C5.33337 27.3739 5.61433 28.0521 6.11442 28.5522C6.61452 29.0523 7.2928 29.3333 8.00004 29.3333H24C24.7073 29.3333 25.3856 29.0523 25.8857 28.5522C26.3858 28.0521 26.6667 27.3739 26.6667 26.6666V10.6666L18.6667 2.66663Z'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M18.6666 2.66663V10.6666H26.6666'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M21.3333 17.3334H10.6666'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M21.3333 22.6666H10.6666'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M13.3333 12H12H10.6666'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
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
                            <svg
                                aria-hidden='true'
                                data-icon='mail'
                                className={cl.icons}
                                role='img'
                                width='33'
                                height='32'
                                viewBox='0 0 33 32'
                                fill='white'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M5.79716 5.33337H27.1305C28.5972 5.33337 29.7972 6.53337 29.7972 8.00004V24C29.7972 25.4667 28.5972 26.6667 27.1305 26.6667H5.79716C4.33049 26.6667 3.13049 25.4667 3.13049 24V8.00004C3.13049 6.53337 4.33049 5.33337 5.79716 5.33337Z'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M29.7972 8L16.4638 17.3333L3.13049 8'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
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
                                width='33'
                                height='32'
                                viewBox='0 0 33 32'
                                fill='white'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M16.5417 29.3333C23.9055 29.3333 29.875 23.3638 29.875 16C29.875 8.63616 23.9055 2.66663 16.5417 2.66663C9.17791 2.66663 3.20837 8.63616 3.20837 16C3.20837 23.3638 9.17791 29.3333 16.5417 29.3333Z'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M16.5417 8V16L21.8751 18.6667'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
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
                    <div className={cl.card}>
                        <div className={cl.icons_wrapper}>
                            <svg
                                aria-hidden='true'
                                data-icon='thumbs-up'
                                className={cl.icons}
                                role='img'
                                width='33'
                                height='32'
                                viewBox='0 0 33 32'
                                fill='white'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M9.87504 14.6666L15.2084 2.66663C16.2692 2.66663 17.2867 3.08805 18.0368 3.8382C18.7869 4.58834 19.2084 5.60576 19.2084 6.66663V12H26.755C27.1416 11.9956 27.5245 12.0753 27.8771 12.2336C28.2298 12.3919 28.5439 12.6249 28.7975 12.9166C29.0512 13.2084 29.2384 13.5517 29.3462 13.923C29.4539 14.2942 29.4797 14.6844 29.4217 15.0666L27.5817 27.0666C27.4853 27.7025 27.1623 28.2821 26.6722 28.6986C26.1822 29.1152 25.5581 29.3406 24.915 29.3333H9.87504M9.87504 14.6666V29.3333M9.87504 14.6666H5.87504C5.1678 14.6666 4.48952 14.9476 3.98942 15.4477C3.48933 15.9478 3.20837 16.626 3.20837 17.3333V26.6666C3.20837 27.3739 3.48933 28.0521 3.98942 28.5522C4.48952 29.0523 5.1678 29.3333 5.87504 29.3333H9.87504'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                        <div className={cl.front}>
                            <div className={cl.wrapper}>
                                <h3 className={cl.title}>Наши партнеры</h3>
                                <ul className={cl.bottom_item}>
                                    <li>
                                        <a href='https://kemer.app'>
                                            Kemer.app - Экскурсии в Кемере
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://azimuth-mo.ru'>
                                            Инвестиционный фонд "Азимут"
                                        </a>
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
