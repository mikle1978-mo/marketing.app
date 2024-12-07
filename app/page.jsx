import cl from "./page.module.css";
import MainList from "../components/mainlist/mainlist";

export default function Home() {
    return (
        <>
            <main className={cl.main}>
                <div className={cl.title}>
                    <h1>Контекстная реклама в Турции</h1>
                    <p>- всё, что нужно для качественной рекламы в Турции</p>
                </div>

                <MainList />
            </main>
        </>
    );
}
