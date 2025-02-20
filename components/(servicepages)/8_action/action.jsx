"use client";

import cl from "./action.module.css";
import MyModal from "@/components/UI/modal/modal";
import Form from "@/components/UI/forms/form";
import { useState } from "react";

export default function Action({ actions, title, form_title }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const handleSuccess = () => {
        setIsOpen(false);
    };

    return (
        <section className='section'>
            <div className={cl.actions}>
                <div className={cl.top}>
                    <h2 className={cl.title}>{title}</h2>
                    <div className={cl.description}>{actions}</div>
                </div>
                <div className={cl.form_wrapper}>
                    <Form
                        onSuccess={handleSuccess}
                        title={form_title || "Получить обратный звонок"}
                        button={"Заказать"}
                    />
                </div>
            </div>
            <MyModal isOpen={isOpen} toggleOpen={toggleOpen}>
                <Form
                    onSuccess={handleSuccess}
                    title={"Получить клиентов"}
                    button={"Отправить"}
                />
            </MyModal>
        </section>
    );
}
