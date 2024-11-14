"use client";

import Image from "next/image";
import cl from "./service_item.module.css";
import MyButton from "@/components/UI/buttons/myButton";
import { useRouter } from "next/navigation";
import MyModal from "@/components/UI/modal/modal";
import Form from "@/components/UI/forms/form";
import { useState } from "react";

export default function ServiceItem({ item }) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const handleSuccess = () => {
        setIsOpen(false);
    };

    return (
        <>
            <figure className={cl.figure}>
                <Image
                    src={item.img}
                    alt={item.name}
                    className={cl.img}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    priority
                />
                <figcaption className={cl.figcaption}>
                    <h1 className={`${cl.title} ${cl.highlight}`}>
                        {item.name}
                    </h1>
                    <div className={cl.desc}>{item.title}</div>
                </figcaption>
            </figure>
            <div className={cl.price_wrapper}>
                Стоимость услуги: от
                <span className={cl.price}> {item.price}</span>
                <span className={cl.old_price}>{item.old_price} </span>
            </div>
            <div className={cl.period_wrapper}>
                Срок выполнения: от {item.period} рабочих дней
            </div>
            <div className={cl.desc_wrapper}>
                {item.desc.map((i, index) => (
                    <div className={cl.desc} key={index}>
                        <p>{i}</p>
                    </div>
                ))}
            </div>
            <div className={cl.button_wrapper}>
                <MyButton
                    onClick={() => router.push(`${item.slug}/description`)}
                >
                    Подробнее
                </MyButton>
                <MyButton onClick={toggleOpen}>Заказать</MyButton>
            </div>
            <MyModal isOpen={isOpen} toggleOpen={toggleOpen}>
                <Form onSuccess={handleSuccess} />
            </MyModal>
        </>
    );
}
