"use client"
import { useEffect, useState } from 'react'
import styles from './Footer.module.scss'
import 'bootstrap'
import React from "react";
import Head from 'next/head';


export const Footer = () => {
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        setIsLogin(true)
    }, [])
    return (
        <header className={styles.wrapper}>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Fira+Sans:wght@400;500;700&family=Montserrat:wght@900&display=swap"
                    rel="stylesheet"
                />

                <title>БФЧКП — Белорусская Федерация Чирлидинга и Команд Поддержки</title>
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
            </div>
        </header>

    )
}
