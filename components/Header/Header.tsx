import React from "react";
import styles from "./Header.module.scss"
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

const navLink = [
    {id: 1, path: "/about", inner: "о бренде"},
    {id: 2, path: "/responsibility", inner: "ответственность"},
    {id: 3, path: "/places", inner: "где купить"},
    {id: 4, path: "/support", inner: "поддержка"},
    {id: 5, path: "/contacts", inner: "контакты"},
    {id: 6, path: "/", inner: "Сотрудничество"}
]

const Header: React.FC = () => {

    const {pathname} = useRouter()
    console.log(pathname)
    return (
        <div className={styles.container}>
            <div className={styles.container_logo}>
                <Image src={"/assets/svg/logo.svg"} width={97} height={29} alt={"logo"}/>
            </div>
            <nav className={styles.navbar}>
                {navLink.map((el) => (
                    <Link className={`${styles.link} ${pathname === el.path ? styles.active : null}`} key={el.id}
                          href={el.path}>{el.inner}</Link>
                ))}
            </nav>
        </div>
    )
}

export default Header