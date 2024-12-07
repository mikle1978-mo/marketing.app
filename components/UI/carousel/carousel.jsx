import cl from "./carousel.module.css";
import Main_item from "@/components/main_item/main_item";

export default function Carousel({ data }) {
    return (
        <div className={cl.main_container}>
            <div className={cl.window}>
                <div className={cl.all_pages_container}>
                    {data.map((child, index) => (
                        <div className={cl.item_wrapper} key={index}>
                            <Main_item item={child} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
