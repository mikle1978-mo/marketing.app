"use client";

import cl from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

import Social from "@/components/UI/social/social";
import Copyright from "../copyright/copyright";
import { ServicesList } from "@/lib/services";

export default function Footer() {
    const yandexServices = ServicesList.filter((service) =>
        service.name.toLowerCase().includes("yandex direct")
    );

    const googleServices = ServicesList.filter((service) =>
        service.name.toLowerCase().includes("google ads")
    );

    const otherServices = ServicesList.filter(
        (service) =>
            !service.name.toLowerCase().includes("yandex direct") &&
            !service.name.toLowerCase().includes("google ads")
    );
    return (
        <footer className={cl.footer}>
            <div className={cl.line}>
                <Link className={cl.logo} href='/'>
                    <Image
                        className={cl.logo_img}
                        src='/logo.png'
                        alt='Marketing Stark logo'
                        width={96}
                        height={96}
                    />
                    <span>Marketing Stark</span>
                </Link>
                <div className={cl.contacts}>
                    <Social />
                </div>
            </div>
            <div className={cl.bottom_line}>
                <ul className={cl.bottom_item}>
                    <span className={cl.title}>Google Ads</span>
                    {googleServices.map((item) => (
                        <li key={item.id}>
                            <Link href={`/${item.slug}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul className={cl.bottom_item}>
                    <span className={cl.title}>Yandex Direct</span>
                    {yandexServices.map((item) => (
                        <li key={item.id}>
                            <Link href={`/${item.slug}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul className={cl.bottom_item}>
                    <span className={cl.title}>Дополнительно</span>
                    {otherServices.map((item) => (
                        <li key={item.id}>
                            <Link href={`/${item.slug}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul className={cl.bottom_item}>
                    <span className={cl.title}>Контакты</span>

                    <li>
                        <Link
                            href='mailto:moygromov19@gmail.com?subject=Important-mail:&body=Hello.'
                            type='email'
                            className={cl.link}
                        >
                            email: StarkMarketing-50@yandex.ru
                        </Link>
                    </li>
                    <li>
                        <Link href='tel:+905356062642' className={cl.link}>
                            тел: +90 535 606 26 42
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='https://wa.me/905356062642'
                            className={cl.link}
                        >
                            WhatsApp: +90 535 606 26 42
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='https://t.me/+905356062642'
                            className={cl.link}
                        >
                            Telegram: +90 535 606 26 42
                        </Link>
                    </li>
                    <li>
                        <p>Адрес: Куздере, Кемер, Анталия, Турция</p>
                    </li>
                </ul>
                <ul className={cl.bottom_item}>
                    <span className={cl.title}>Часы работы</span>

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
                <ul className={cl.bottom_item}>
                    <span className={cl.title}>Документы</span>

                    <li>
                        <Link href='/privacy' className={cl.link}>
                            Политика обработки персональных данных
                        </Link>
                    </li>
                    <li>
                        <Link href='/price_list' className={cl.link}>
                            Тарифы
                        </Link>
                    </li>
                    <li>
                        <Link href='/best' className={cl.link}>
                            Наши преимущества
                        </Link>
                    </li>
                </ul>
            </div>
            <Copyright />
        </footer>
    );
}
