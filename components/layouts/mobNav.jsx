"use client";

import Link from "next/link";
import cl from "./mobNav.module.css";
import Social from "../UI/social/social";
import MyButton from "../UI/buttons/myButton";
import { ServicesList } from "@/lib/services";
import Copyright from "../copyright/copyright";

export default function MobNav({ isOpen, closeMenu, toggleOpen }) {
    const handleOrderClick = () => {
        closeMenu(); // Закрываем мобильное меню
        toggleOpen(); // Открываем модальное окно с формой
    };

    return (
        <>
            <div
                className={` ${cl.nav_overlay} ${isOpen ? cl.open : ""}`}
            ></div>
            <nav className={` ${cl.mnavigation} ${isOpen ? cl.open : ""}`}>
                <div className={cl.mobnav_toprow}>
                    <MyButton onClick={handleOrderClick}>Заказать</MyButton>
                </div>
                <ul>
                    <li>
                        <Link onClick={closeMenu} href='/'>
                            Главная
                        </Link>
                    </li>
                    {ServicesList.map((item) => (
                        <li key={item.id}>
                            <Link onClick={closeMenu} href={`/${item.slug}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={cl.socials_wrapper}>
                    <Social />
                </div>
                <Copyright />
            </nav>
        </>
    );
}
