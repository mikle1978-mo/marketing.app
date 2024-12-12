"use client";

import cl from "./head_block.module.css";
import MyModal from "@/components/UI/modal/modal";
import Form from "@/components/UI/forms/form";
import { useState } from "react";

export default function HeadBlock({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const handleSuccess = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className={cl.head_block}>
                <div
                    className={cl.cover} // Элемент обложки
                    style={{
                        backgroundImage: `url('${item.img}')`,
                    }}
                />
                <div className={cl.head_block_title}>
                    <div className={cl.subtitle}>{item?.subtitle}</div>
                    <h1 className={`${cl.title} ${cl.highlight}`}>
                        {item?.title}
                    </h1>
                    {item?.subtitle2 && typeof item.subtitle2 === "string" && (
                        <div
                            className={cl.subtitle2}
                            dangerouslySetInnerHTML={{ __html: item.subtitle2 }}
                        />
                    )}
                    <div className={cl.price}>от {item.price}$</div>
                </div>
                <div className={cl.form_wrapper}>
                    <Form
                        onSuccess={handleSuccess}
                        title={"Получить клиентов"}
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
        </>
    );
}
