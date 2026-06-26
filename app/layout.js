import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import YandexMetrika from "@/components/yandex/metrika";
import WhatsApp from "@/components/UI/whatsapp/whatsapp";

export const metadata = {
    metadataBase: new URL(process.env.API_URL),
    title: {
        default: "MarketingStark - всё, что нужно для интернет продвижения",
        template: "%s - MarketingStark",
    },
    description:
        "✨ Разработка современных сайтов. Создание лендингов, корпоративных сайтов и сайтов для интернет магазинов 🛒. СЕО (SEO) оптимизация 🔍 и продвижение в интернете🚀. Настройка рекламы в Google и Yandex. Ведение, оптимизация, аудит рекламных кампаний",
    alternates: {
        canonical: `${process.env.API_URL}`,
    },
    keywords: [
        "заказать разработку сайта",
        "заказать создание сайта",
        "сео продвижение сайтов",
        "разработка лендинга",
        "заказать разработку лендинга",
        "заказать создание лендинга",
        "разработка интермагазина",
        "оптимизация google ads",
        "оптимизация яндекс",
        "заказать настройку яндекс директ",
        "настройка и ведение рекламы",
        "аудит рекламной кампании",
        "ведение яндекс директ",
        "таргетированная реклама",
        "контекстная реклама",
        "реклама в интернете",
        "контекстная реклама гугл",
        "настройка гугл адвордс",
        "реклама интернет магазина",
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
        <html lang='ru'>
            <head>
                {/* Add Google Analytics script */}
                <link
                    rel='icon'
                    href='https://marketingstark.app/favicon.ico'
                    type='image/x-icon'
                ></link>
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
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MRG78TXT');
                            `,
                    }}
                />
                {/* End Google Tag Manager */}
                {/* Яндекс.Метрика */}
                <YandexMetrika />
                {/* Конец Яндекс.Метрики */}
                {/* Start Yandex verification */}
                <meta name='yandex-verification' content='aa6d456bdb10af99' />
                <meta name='yandex-verification' content='bda6adf35ed76225' />
                {/* End Yandex verification */}
                {/* Google AdSense */}
                <script
                    async
                    src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5449189100205390'
                    crossorigin='anonymous'
                ></script>
            </head>
            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src='https://www.googletagmanager.com/ns.html?id=GTM-MRG78TXT'
                        height='0'
                        width='0'
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <Header />
                <WhatsApp />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
