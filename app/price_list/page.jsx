import { ServicesList } from "@/lib/services";
import cl from "./page.module.css";
import Link from "next/link";

export const metadata = {
    metadataBase: new URL(process.env.API_URL),
    title: "Цены на услуги - MarketingStark",

    description: "Цены на услуги, оказываемые MarketingStark",
    alternates: {
        canonical: `${process.env.API_URL}/price_list`,
    },
};

export default function PriceList() {
    return (
        <>
            <h1>Цены на услуги</h1>
            <table className={cl.table}>
                <thead className={cl.table_head}>
                    <tr>
                        <th scope='col' className={cl.head_item}>
                            Услуга
                        </th>
                        <th scope='col' className={cl.head_item}>
                            Цена (от){" "}
                        </th>
                        <th scope='col' className={cl.head_item}>
                            Старая цена{" "}
                        </th>
                        <th scope='col' className={cl.head_item}>
                            Срок <span>(раб.дн)</span>{" "}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ServicesList.map((item) => (
                        <tr key={item.id} className={cl.table_row}>
                            <td className={cl.item_name}>
                                <Link
                                    href={`/${item.slug}`}
                                    className={cl.link}
                                >
                                    {item?.title}{" "}
                                </Link>
                            </td>
                            <td className={cl.item}>
                                <Link
                                    href={`/${item.slug}`}
                                    className={cl.link}
                                >
                                    {item?.price}{" "}
                                </Link>
                            </td>
                            <td className={cl.item}>
                                <Link
                                    href={`/${item.slug}`}
                                    className={cl.link}
                                >
                                    {item?.old_price}{" "}
                                </Link>
                            </td>
                            <td className={cl.item}>
                                <Link
                                    href={`/${item.slug}`}
                                    className={cl.link}
                                >
                                    {item?.period}{" "}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
