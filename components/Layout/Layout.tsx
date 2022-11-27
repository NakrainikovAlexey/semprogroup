import React, {PropsWithChildren} from "react";
import Head from "next/head";
import styles from "./Layout.module.scss"
import Header from "../Header/Header";

interface LayoutProps {
    children: any;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>LOGO</title>
                <meta name="description" content="Test"/>
                <link rel="icon" href="/assets/icons/favicon-16x16.png" type="image/png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
                      rel="stylesheet"/>
            </Head>
            <Header/>
            {children}
        </div>
    )
}
export default Layout