"use client";

import cl from "./form.module.css";
import MyButton from "../buttons/myButton";
import { useRef } from "react";
import TGMessage from "@/helpers/TGMessage";
import { useRouter } from "next/navigation";

export default function Form({ onSuccess }) {
    const formRef = useRef(null);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        const data = {
            phone: formData.get("phone"),
            name: formData.get("name"),
            message: formData.get("message"),
        };

        TGMessage(data);
        formRef.current.reset();
        onSuccess();
        router.push("./thanks");
    };

    return (
        <>
            <form className={cl.form} ref={formRef} onSubmit={handleSubmit}>
                <span className={cl.form_title}>Заказать обратный звонок</span>
                <div className={cl.input_wrapper}>
                    <div className={cl.input_field}>
                        <input name='name' placeholder='Ваше имя' required />
                    </div>
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
                        placeholder='Ваше сообщение (не обязательно)'
                        rows='4'
                    />
                </div>
                <div className={cl.button_wrapper}>
                    <MyButton type='submit'>Отправить</MyButton>
                </div>
            </form>
        </>
    );
}
