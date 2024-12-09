import cl from "./page.module.css";
import ArticlesListComponent from "@/components/blog/articleslist";
import Head from "next/head";

export const metadata = {
    metadataBase: new URL(process.env.API_URL),
    title: "Блог о рекламе - MarketingStark",
    description: "Полезные статьи про рекламу MarketingStark",
    alternates: {
        canonical: `${process.env.API_URL}/blog`,
    },
};

export default function Blog() {
    const jsonLd = {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Marketing Stark",
            url: "https://marketingstark.app/blog",
            logo: "https://marketingstark.app/logo.png",
            description: "Полезные статьи про рекламу MarketingStark",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Кемер, Aнталия, Турция",
                addressCountry: "TR",
                streetAddress: "Куздере",
                postalCode: "07982",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90 535 606 2642",
                contactType: "customer service",
                areaServed: "Турция",
            },
            sameAs: ["https://www.instagram.com/marketingstark_app/"],
        }),
    };
    return (
        <>
            <Head>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
            </Head>
            <section className={cl.blog}>
                <h1>Полезные статьи о рекламе и не только</h1>
                <ArticlesListComponent />
            </section>
        </>
    );
}
