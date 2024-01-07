"use client"
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import 'bootstrap'
import React from "react";
import Head from 'next/head';


export const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    setIsLogin(true)
  }, [])
  return (
    <header className={styles.wrapper}>
      <Head>
        <meta property="og:title" content={"БФЧКП"} />
        <meta property="og:description" content={"— Белорусская Федерация Чирлидинга и Команд Поддержки"} />
        <meta name="twitter:title" content={"БФЧКП"} />
        <meta name="twitter:description" content={"— Белорусская Федерация Чирлидинга и Команд Поддержки"} />
        <meta name="og:image" content={"images/bfchkp.jpg"} />
      </Head>
      <div className={styles.container}>
        <div className={styles.row}>
          <a href="#">
            <img src="images/bfchkp_emblem.jpg" className={styles.emblem} />
          </a>
          <ul className={styles.list_header}>
            <li><a href="/members" target="_blank">ЧЛЕНЫ</a></li>
            <li><a href="/comp" target="_blank">Соревнования</a></li>
            <li><a href="/coaches/" target="_blank">Тренеры</a></li>
            <li><a href="<?php echo BASE_URL . 'o_nas.php' ?>" target="_blank">О нас</a></li>
            {/* ToDo: */}
            {/* <li>
                                <?php if (isset($_SESSION['id'])) : ?>
                                <a href="#" target="_blank" style="width: 330px; text-align: right;">
                                    <i className="fa fa-user"></i>
                                    <?php echo $_SESSION['login']; ?>
                                </a>
                                <ul style="text-align: center;">
                                    <?php if ($_SESSION['admin']) : ?>
                                    <li><a href="#" target="_blank">Админ. панель</a></li>
                                    <?php endif; ?>
                                    <li ><a href="<?php echo BASE_URL . " logout.php"; ?>">Выход</a></li>
                        </ul>
                        <?php else : ?>
                        <a href="<?php echo BASE_URL . " log.php"; ?>" target="_blank" style="width: 330px; text-align: right;">
                        <i className="fa fa-user"></i>
                        Войти
                    </a>
                    <ul>
                        <li><a href="<?php echo BASE_URL . " reg.php"; ?>" target="_blank">Зарегистрироваться</a></li>
                </ul>
                <?php endif; ?>
            </li> */}

          </ul>
          <div className={styles.carousel}>
            <div className="col-1">
              {/* <!-- блок карусели start--> */}
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={'images/clubs/2_s.png'} className={styles.block} alt="Profil" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/3_s.png'} className={styles.block} alt="New Style" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/9_s.png'} className={styles.block} alt="Dartly" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/13_s.png'} className={styles.block} alt="Black Fox" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/19_s.png'} className={styles.block} alt="Tornado" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/20_s.png'} className={styles.block} alt="Miami" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/27_s.png'} className={styles.block} alt="ЭПИ Center" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/29_s.png'} className={styles.block} alt="X Team" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/33_s.png'} className={styles.block} alt="Indigo" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/34_s.png'} className={styles.block} alt="D C" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/43_s.png'} className={styles.block} alt="Helious" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/51_s.png'} className={styles.block} alt="Fortuna" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/55_s.png'} className={styles.block} alt="Red Lion" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/61_s.png'} className={styles.block} alt="FidGym" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/65_s.png'} className={styles.block} alt="Cheer Start" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/67_s.png'} className={styles.block} alt="Griffin" />
                  </div>
                  <div className="carousel-item">
                    <img src={'images/clubs/68_s.png'} className={styles.block} alt="Dream Dance" />
                  </div>
                </div>
              </div>
              {/* <!-- блок карусели end--> */}
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}
