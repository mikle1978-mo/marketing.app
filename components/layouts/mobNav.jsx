"use client";

import Link from "next/link";
import cl from "./mobNav.module.css";
import Social from "../UI/social/social";
import MyButton from "../UI/buttons/myButton";
import Copyright from "../copyright/copyright";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import menuItems from "@/lib/nav";

export default function MobNav({ isOpen, closeMenu, toggleOpen }) {
    const handleOrderClick = () => {
        closeMenu();
        toggleOpen();
    };

    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (index) => {
        setOpenSubmenu((prevState) => (prevState === index ? null : index));
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
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={openSubmenu === index ? cl.open : ""}
                        >
                            {item.submenu ? (
                                <>
                                    <button
                                        onClick={() => toggleSubmenu(index)}
                                        aria-expanded={openSubmenu === index}
                                        aria-controls={`submenu-${index}`}
                                        className={cl.submenuButton}
                                    >
                                        {item.title}
                                        <FontAwesomeIcon
                                            icon={faChevronDown}
                                            className={
                                                openSubmenu === index
                                                    ? cl.icon_open
                                                    : ""
                                            }
                                        />
                                    </button>
                                    <ul
                                        id={`submenu-${index}`}
                                        hidden={openSubmenu !== index}
                                    >
                                        {item.submenu.map(
                                            (subitem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        onClick={closeMenu}
                                                        href={subitem.link}
                                                        rel={item.rel}
                                                    >
                                                        {subitem.title}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </>
                            ) : (
                                <Link
                                    onClick={closeMenu}
                                    href={item.link}
                                    rel={item.rel}
                                >
                                    {item.title}
                                </Link>
                            )}
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
