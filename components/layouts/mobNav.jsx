"use client";

import Link from "next/link";
import cl from "./mobNav.module.css";
import Social from "../UI/social/social";
import MyButton from "../UI/buttons/myButton";
import Copyright from "../copyright/copyright";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function MobNav({ isOpen, closeMenu, toggleOpen }) {
    const handleOrderClick = () => {
        closeMenu(); // Закрываем мобильное меню
        toggleOpen(); // Открываем модальное окно с формой
    };
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (index) => {
        setOpenSubmenu((prevState) => (prevState === index ? null : index));
    };

    const menuItems = [
        {
            title: "Реклама Google",
            submenu: [
                { title: "Настройка", link: "/google_setting" },
                { title: "Ведение", link: "/google_management" },
                { title: "Оптимизация", link: "/google_optimization" },
                { title: "Аудит", link: "/google_audit" },
            ],
        },
        {
            title: "Реклама Yandex",
            submenu: [
                { title: "Настройка", link: "/yandex_setting" },
                { title: "Ведение", link: "/yandex_management" },
                { title: "Оптимизация", link: "/yandex_optimization" },
                { title: "Аудит", link: "/yandex_audit" },
            ],
        },
        {
            title: "Разработка сайтов",
            submenu: [
                { title: "Лендинги", link: "/landing" },
                { title: "Сайты", link: "/website" },
                { title: "Магазины", link: "/ecomm" },
            ],
        },
    ];

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
                    {" "}
                    <li>
                        <Link onClick={closeMenu} href='/'>
                            Главная
                        </Link>
                    </li>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={openSubmenu === index ? cl.open : ""}
                        >
                            <span
                                onClick={() => toggleSubmenu(index)}
                                aria-expanded={openSubmenu === index}
                                aria-controls={`submenu-${index}`}
                            >
                                {item.title}{" "}
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={
                                        openSubmenu === index
                                            ? cl.icon_open
                                            : ""
                                    }
                                />
                            </span>
                            <ul>
                                {item.submenu.map((subitem, subIndex) => (
                                    <li key={subIndex}>
                                        <Link
                                            onClick={closeMenu}
                                            href={subitem.link}
                                        >
                                            {subitem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}{" "}
                    <li>
                        <Link onClick={closeMenu} href='/seo'>
                            CEO
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href='/blog'>
                            Блог
                        </Link>
                    </li>
                </ul>

                <div className={cl.socials_wrapper}>
                    <Social />
                </div>
                <Copyright />
            </nav>
        </>
    );
}
