import cl from "./page.module.css";
import MainList from "../components/mainlist/mainlist";

export default function Home() {
    return (
        <>
            <main className={cl.main}>
                <div style={{ visibility: "hidden" }}>
                    <h1 className='hiddenTitle'>
                        Контекстная реклама в Турции
                    </h1>
                    <p className='hiddenTitle'>
                        - всё, что нужно для качественной рекламы в Турции
                    </p>
                </div>

                <MainList />
            </main>
           
        </>
    );
}
