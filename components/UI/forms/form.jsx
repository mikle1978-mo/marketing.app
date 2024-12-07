"use client";

import cl from "./form.module.css";
import MyButton from "../buttons/myButton";
import { useRef, useEffect, useState } from "react";
import TGMessage from "@/helpers/TGMessage";
import { useRouter } from "next/navigation";

export default function Form({ onSuccess, title, button }) {
    const formRef = useRef(null);
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        // Устанавливаем текущий адрес страницы только на стороне клиента
        if (typeof window !== "undefined") {
            setCurrentPage(window.location.href);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        const data = {
            phone: formData.get("phone"),
            message: formData.get("message"),
            page: formData.get("currentPage"),
        };

        TGMessage(data);
        formRef.current.reset();
        onSuccess();
        router.push("./thanks");
    };

    return (
        <form className={cl.form} ref={formRef} onSubmit={handleSubmit}>
            <span className={cl.form_title}>{title}</span>
            <div className={cl.input_wrapper}>
                <input
                    type='hidden'
                    name='currentPage'
                    value={currentPage} // Используем состояние для текущей страницы
                />
                <div className={cl.input_field}>
                    <input
                        name='phone'
                        placeholder='Номер телефона'
                        type='tel'
                        required
                    />
                </div>
            </div>
            <div className={cl.textarea_wrapper}>
                <textarea
                    name='message'
                    placeholder='Ваше сообщение, например, адрес рекламируемого ресурса (не обязательно)'
                    rows='4'
                />
            </div>
            <div className={cl.button_wrapper}>
                <MyButton type='submit'>{button}</MyButton>
            </div>
        </form>
    );
}
