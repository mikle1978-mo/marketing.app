import Additional from "@/components/(servicepages)/9_additional/additional";
import { ServicesList } from "@/lib/services";
import Link from "next/link";

export default function NotFound() {
    const additionals = ServicesList;
    return (
        <>
            <div style={{ textAlign: "center", padding: "2rem" }}>
                <h1>404</h1>
                <p>Страница не найдена.</p>
                <Link
                    href={"/"}
                    rel='nofollow'
                    style={{
                        display: "inline-block", // или "block", если нужен блочный элемент
                        color: "var(--secondary-2)",
                        textDecoration: "underline",
                        lineHeight: "2rem",
                        paddingTop: "1rem", // Пример паддинга
                    }}
                >
                    Главная
                </Link>
            </div>
            <Additional
                additionals={additionals}
                title={"Вы также можете посмотреть"}
            />
        </>
    );
}
