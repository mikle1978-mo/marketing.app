"use client";

import MyButton from "@/components/UI/buttons/myButton";
import cl from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Thanks() {
    const router = useRouter();
    return (
        <div className={cl.thanks}>
            <h1>Спасибо за заявку!</h1>
            <p>Мы перезвоним Вам в течении часа</p>
            <MyButton onClick={() => router.push("/")}>Главная</MyButton>
            <Image
                src='/images/others/thanks.webp'
                alt='Cпасибо за заказ'
                className={cl.img}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
            />
        </div>
    );
}
