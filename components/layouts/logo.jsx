import Link from "next/link";
import cl from "./logo.module.css";

export default function Logo() {
    return (
        <Link className={cl.logo} rel='nofollow' href='/'>
            {/* <Image
        className={cl.logo_img}
        src='/logo.png'
        alt='Marketing Stark logo'
        width={96}
        height={96}
    /> */}
            <span className={cl.img}>
                <p className={cl.img2}>
                    <p className={cl.img3}>
                        <p className={cl.img4}>
                            {" "}
                            <p className={cl.img5}></p>
                        </p>
                    </p>
                </p>
            </span>
            <span className={cl.logo_title}>Marketing Stark</span>
        </Link>
    );
}
