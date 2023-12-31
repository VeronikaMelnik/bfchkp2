"use client"
import { useEffect, useState } from 'react'
import Head from 'next/head';


export const Footer = () => {
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        setIsLogin(true)
    }, [])
    return (
        <header className={styles.wrapper}>
            <Head>
                <title>БФЧКП — Белорусская Федерация Чирлидинга и Команд Поддержки</title>
                <meta property="og:title" content={title} /> 
                <meta property="og:description" content={description} /> 
                <meta name="twitter:title" content={title} /> 
                <meta name="twitter:description" content={description} /> 
                <meta name="og:image" content={image} />
            </Head>
            <div className="footer container-fluid">
                <div className="footer-content container">
                    <div className="row footer-section about">
                        <div className="col-8">
                            <p>Белорусская Федерация Чирлидинга и Команд Поддержки — это спортивная организация, созданная
                                Язвиным Олегом Владимировичем для популяризации чирлидинга в Беларуси и развитии белорусского
                                спорта.
                                <br /><br />
                                <p className={styles.phrase}>Приходи к нам — окунись в спортивную жизнь!</p>
                            </p>
                        </div>
                        <div className="contact col-4">
                            <a href="tel:+375293267922"><i className="fas fa-phone"></i> &nbsp; +375(29)326-79-22</a>
                            <br />
                            <a href="mailto:veronikamelnik00@mail.ru"><i className="fas fa-envelope"></i> &nbsp; cheerleader@tut.by</a>
                            <div className="socials">
                                <a href="https://www.instagram.com/belarus_cheer/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/@cheerleadinginbelarus4366" target="_blank"><i className="fab fa-youtube"></i></a>
                                <a href="https://vk.com/bfchkp" target="_blank"><i className="fab fa-vk"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}
