import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    metadataBase: new URL(process.env.API_URL),
    title: {
        default: "Реклама в интернете, контекстная реклама",
        template: "%s - MarketingSratk",
    },
    description:
        "Настройка рекламы в Yandex Direct, Google Ads, Яндекс Директ, Гугл Адс. Настройка контекстной рекламы. Ведение, оптимизация, аудит рекламных кампаний. CEO, СЕО оптимизация, разработка продающих лендингов, сайтов и сайтов для интернет магазинов",
    alternates: {
        canonical: `${process.env.API_URL}`,
    },
    keywords: [
        "настройка контекстной рекламы",
        "заказ контекстной рекламы",
        "заказать контекстная реклама",
        "заказать контекстную рекламу",
        "заказать настройку контекстной рекламы",
        "заказать настройку контекстной рекламы в интернете",
        "заказать настройку рекламы",
        "контекстная реклама в интернете заказать",
        "контекстная реклама заказать",
        "контекстная реклама заказать настройку",
        "контекстная реклама настроить",
        "контекстная реклама настройка",
        "контекстный настройка реклама",
        "настроить контекстную рекламу",
        "настройка и ведение контекстной рекламы",
        "настройка и ведение рекламы",
        "настройка интернет рекламы",
        "настройка контекстной рекламы для интернет магазина",
        "настройка контекстной рекламы заказать",
        "настройка контекстной рекламы интернете",
        "настройка контекстной рекламы услуги",
        "настройка рекламных кампаний",
        "настройка рекламы в интернете",
        "настройка рекламы в поисковиках",
        "настройка рекламы заказать",
        "профессиональная настройка контекстной рекламы",
        "разработка контекстной рекламы",
        "реклама настройка",
        "сайт контекстной рекламы",
        "создание и ведение контекстной рекламы",
        "создание контекстной рекламы",
        "услуги настройки контекстной рекламы",
        "услуги по настройке контекстной рекламы",
        "услуги по настройке рекламы",
        "эффективная настройка контекстной рекламы",
    ],
    icons: {
        icon: [
            {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                url: "/favicon-96x96.png",
            },
            { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
        ],
        apple: "/apple-touch-icon.png",
        shortcut: "/favicon.ico",
    },
    manifest: "/site.webmanifest",
    appleWebApp: {
        title: "Marketing Stark",
    },
};
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                {/* Add Google Analytics script */}
                <script
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-N772FVWY5R'
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-N772FVWY5R');
                        `,
                    }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header />
                <div className='container'>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
