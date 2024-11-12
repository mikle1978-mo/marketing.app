"use client";

import cl from "./burger.module.css";

export default function Burger({ toggleNav, isNavOpen }) {
    return (
        <div
            className={`${cl.menu} ${cl.burger2} ${isNavOpen ? cl.open : ""}`}
            onClick={toggleNav}
        >
            <div className={cl.icon}></div>
        </div>
    );
}
