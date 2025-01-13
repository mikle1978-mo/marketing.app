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
            <div className={cl.img}>
                <div className={cl.img2}>
                    <div className={cl.img3}>
                        <div className={cl.img4}>
                            <div className={cl.img5}></div>
                        </div>
                    </div>
                </div>
            </div>
            <span className={cl.logo_title}>Marketing Stark</span>
        </Link>
    );
}
