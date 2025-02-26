import cl from "./copyright.module.css";

export default function Copyright() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={cl.copyright}>
            Copyright © 2020-{currentYear} MarketingStark
        </div>
    );
}
