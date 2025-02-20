"use client";

import React, { useState, useEffect } from "react";
import cl from "./calculator.module.css";
import WorkItem from "./work_item";
import MyModal from "@/components/UI/modal/modal";
import MyButton from "@/components/UI/buttons/myButton";

const Calculator = ({ works, title, desc }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    const [services, setServices] = useState(works);
    const [campaignCount, setCampaignCount] = useState(1);
    const [totalCost, setTotalCost] = useState();

    const toggleService = (id) => {
        setServices((prevServices) =>
            prevServices.map((service) =>
                service.id === id
                    ? { ...service, selected: !service.selected }
                    : service
            )
        );
    };

    useEffect(() => {
        if (campaignCount <= 0) {
            alert("Введите корректное количество кампаний.");
            return;
        }

        const selectedServices = services.filter((service) => service.selected);
        const perCampaignServices = selectedServices.filter(
            (service) => service.perCampaign
        );
        const oneTimeServices = selectedServices.filter(
            (service) => !service.perCampaign
        );

        const perCampaignCost = perCampaignServices.reduce(
            (sum, service) => sum + service.costPerUnit,
            0
        );
        const oneTimeCost = oneTimeServices.reduce(
            (sum, service) => sum + service.costPerUnit,
            0
        );

        const campaignCost = campaignCount * perCampaignCost;
        const feePercentage = 0.1; // 10% комиссия за управление
        const fee = campaignCost * feePercentage;
        const total = campaignCost + oneTimeCost + fee;

        setTotalCost(total);
    }, [services, campaignCount]); // Зависимость от services и campaignCount

    return (
        <section className='section'>
            <h2>{title}</h2>
            <span
                className={cl.content}
                dangerouslySetInnerHTML={{ __html: desc }}
            />
            <MyButton onClick={toggleOpen}> Рассчитать</MyButton>
            <MyModal isOpen={isOpen} toggleOpen={toggleOpen}>
                <div className={cl.calculator_container}>
                    <h2>Калькулятор</h2>
                    <div className={cl.total_wrap}>
                        {totalCost > 0 && (
                            <div className={cl.total_cost}>
                                <p>Стоимость:</p>
                                <p className={cl.total_cost_value}>
                                    ${totalCost.toFixed(2)}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className={cl.services_list}>
                        <h3>Общие работы</h3>
                        {services
                            .filter((service) => !service.perCampaign)
                            .map((service) => (
                                <WorkItem
                                    key={service.id}
                                    service={service}
                                    onToggle={toggleService}
                                />
                            ))}
                        <h3>Работы за каждую кампанию</h3>
                        <div className={cl.input_group}>
                            <label htmlFor='campaignCount'>
                                Количество кампаний:
                            </label>
                            <div className={cl.input_with_buttons}>
                                <button
                                    className={cl.decrement_button}
                                    onClick={() =>
                                        setCampaignCount(
                                            Math.max(0, campaignCount - 1)
                                        )
                                    }
                                >
                                    -
                                </button>
                                <input
                                    type='number'
                                    id='campaignCount'
                                    value={campaignCount}
                                    onChange={(e) =>
                                        setCampaignCount(
                                            Math.max(
                                                0,
                                                parseInt(e.target.value) || 0
                                            )
                                        )
                                    }
                                    placeholder='Введите количество'
                                />
                                <button
                                    className={cl.increment_button}
                                    onClick={() =>
                                        setCampaignCount(campaignCount + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        {services
                            .filter((service) => service.perCampaign)
                            .map((service) => (
                                <WorkItem
                                    key={service.id}
                                    service={service}
                                    onToggle={toggleService}
                                />
                            ))}
                    </div>
                </div>
            </MyModal>
        </section>
    );
};

export default Calculator;
