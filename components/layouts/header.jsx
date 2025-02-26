"use client";

import cl from "./header.module.css";
import Social from "../UI/social/social";
import MyButton from "../UI/buttons/myButton";
import Burger from "../UI/burger/burger";
import { useState } from "react";
import MyModal from "../UI/modal/modal";
import Form from "../UI/forms/form";
import MobNav from "./mobNav";
import Logo from "./logo";

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
            <div className='container'>
                <div className={cl.line}>
                    <Logo />
                    <div className={cl.contacts}>
                        <Social />
                        <MyButton onClick={toggleOpen}>Заказать</MyButton>
                    </div>
                    <Burger toggleNav={toggleNav} isNavOpen={isNavOpen} />
                </div>
            </div>
            <MyModal isOpen={isOpen} toggleOpen={toggleOpen}>
                <Form
                    onSuccess={handleSuccess}
                    title={"Заказать обратный звонок"}
                    button={"Отправить"}
                />
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
