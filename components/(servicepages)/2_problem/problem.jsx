"use client";
import { useEffect, useRef } from "react";
import cl from "./problem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Problem({ problems, title }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(cl.visible);
                    }
                });
            },
            {
                threshold: 0.1, // Процент появления элемента в области видимости
            }
        );

        const cards = sectionRef.current.querySelectorAll(`.${cl.card}`);
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    return (
        <section className={cl.section} ref={sectionRef}>
            <h2 className={cl.title}>{title}</h2>
            <div
                className={cl.problems}
                dangerouslySetInnerHTML={{ __html: problems }}
            />
        </section>
    );
}
