import cl from "./mainlist.module.css";
import Main_item from "../main_item/main_item";
import { ServicesList } from "@/lib/services";

export default function MainList() {
    return (
        <>
            <section className={cl.mainList}>
                {ServicesList.map((item) => (
                    <Main_item item={item} key={item.id} />
                ))}
            </section>
        </>
    );
}
