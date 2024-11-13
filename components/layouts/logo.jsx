import Link from "next/link";
import cl from "./logo.module.css";

export default function Logo() {
    return (
        <Link className={cl.logo} href='/'>
            {/* <Image
        className={cl.logo_img}
        src='/logo.png'
        alt='Marketing Stark logo'
        width={96}
        height={96}
    /> */}
            <span className={cl.logo_img}>s</span>
            <span className={cl.logo_title}>Marketing Stark</span>
        </Link>
    );
}
