"use client"
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'

export const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    setIsLogin(true)
  }, [])
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-1">
            <a href="/">
              <img src="images/bfchkp_emblem.jpg" height={80} />
            </a>
          </div>
          <nav className="col-10">
            <ul>
              <li><a href="<?php echo BASE_URL . 'admin/members/index.php' ?>" target="_blank">Члены</a></li>
              <li><a href="<?php echo BASE_URL . 'admin/comp/index.php' ?>" target="_blank">Соревнования</a></li>
              <li><a href="<?php echo BASE_URL . 'admin/coaches/index.php' ?>" target="_blank">Тренеры</a></li>
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
          </nav >
          <div className="col-1">
            {/* <!-- блок карусели start--> */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={'images/clubs/2_s.png'} className={styles.block} alt="Profil" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . "assets/images/clubs/3_s.png"; ?>'} className={styles.block} alt="New Style" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . "assets/images/clubs/9_s.png"; ?>'} className={styles.block} alt="Dartly" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/13_s.png"; ?>'} className={styles.block} alt="Black Fox" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="Tornado" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="Miami" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="ЭПИ Center" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="X Team" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="Indigo" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="D C" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="Helious" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="Fortuna" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="Red Lion" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="FidGym" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="Cheer Start" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="Griffin" />
                </div>
                <div className="carousel-item">
                  <img src={'<?php echo BASE_URL . " assets /images/clubs/19_s.png"; ?>'} className={styles.block} alt="Dream Dance" />
                </div>
              </div>
            </div>
            {/* <!-- блок карусели end--> */}
          </div>
        </div >
      </div >
    </header >
  )
}
