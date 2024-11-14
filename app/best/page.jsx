import cl from "./page.module.css";

export const metadata = {
    metadataBase: new URL(process.env.API_URL),
    title: "Наши преимущества - MarketingSratk",

    description: "Почему стоит заказать у MarketingSratk",
    alternates: {
        canonical: `${process.env.API_URL}/best`,
    },
};

export default function WeAreTheBest() {
    return (
        <div className={cl.best}>
            <h1>Почему стоит работать с нами?</h1>
            <h2>Мультиязычные рекламные кампании для международных рынков</h2>
            <p>
                Мы не ограничиваемся только одним языковым сегментом. Мы создаем
                рекламные кампании, адаптированные под различные языки и
                культуры, что позволяет эффективно выходить на международные
                рынки и привлекать клиентов по всему миру.
            </p>

            <h2>
                Персонализированные рекламные сообщения для разных языковых
                аудиторий
            </h2>
            <p>
                Наши специалисты учитывают языковые и культурные особенности
                каждой целевой аудитории, создавая персонализированные и
                максимально релевантные рекламные сообщения. Это позволяет
                значительно повысить эффективность рекламы и увеличить
                конверсии.
            </p>

            <h2>Локализация контента с учетом региональных особенностей</h2>
            <p>
                Мы не только переводим контент, но и локализуем его с учетом
                особенностей восприятия и потребностей аудитории в разных
                странах и регионах. Это помогает глубже настроить маркетинг и
                повысить отклик от потенциальных клиентов.
            </p>

            <h2>
                Гибкость и удобство в обслуживании клиентов на разных языках
            </h2>
            <p>
                Мы предоставляем поддержку на нескольких языках, что упрощает
                коммуникацию и повышает уровень доверия у клиентов из разных
                стран. Это особенно важно для бизнеса, работающего на
                международном уровне.
            </p>

            <h2>Полное погружение в бизнес</h2>
            <p>
                Глубоко вникаем в цели и специфику бизнеса, регулярно
                анализируем данные рекламных кампаний, чтобы выбрать наиболее
                продающие настройки.
            </p>

            <h2>Приводим только теплых клиентов</h2>
            <p>
                Вы получите только тех клиентов, которые заинтересованы в вашем
                предложении и готовы приобрести ваш товар или услугу.
            </p>

            <h2>Работа ОПЫТНЫХ специалистов</h2>
            <p>
                В нашей компании нет сотрудников с опытом работы менее 3 лет.
                Каждый специалист в своей области — это гарантия
                профессионализма и высокой квалификации.
            </p>

            <h2>Долгосрочные отношения с клиентами</h2>
            <p>
                Мы не просто проводим рекламные кампании, а строим долгосрочные
                партнерские отношения с клиентами. Постоянно совершенствуем и
                поддерживаем наши решения, адаптируя их под изменяющиеся цели и
                рост бизнеса наших партнеров.
            </p>
        </div>
    );
}
