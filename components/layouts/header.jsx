"use client";

import Link from "next/link";
import cl from "./header.module.css";
import Image from "next/image";
import Social from "../UI/social/social";
import MyButton from "../UI/buttons/myButton";
import Burger from "../UI/burger/burger";
import { useState } from "react";
import MyModal from "../UI/modal/modal";
import Form from "../UI/forms/form";
import MobNav from "./mobNav";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const closeNav = () => setIsNavOpen(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const handleSuccess = () => {
        setIsOpen(false); // Закрыть модальное окно
    };
    return (
        <header className={cl.header}>
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
                    <MyButton onClick={toggleOpen}>Заказать</MyButton>
                </div>
                <Burger toggleNav={toggleNav} isNavOpen={isNavOpen} />
            </div>
            <MyModal isOpen={isOpen} toggleOpen={toggleOpen}>
                <Form onSuccess={handleSuccess} />
            </MyModal>
            <MobNav
                isOpen={isNavOpen}
                closeMenu={closeNav}
                toggleOpen={toggleOpen}
            />
        </header>
    );
};

export default Header;
