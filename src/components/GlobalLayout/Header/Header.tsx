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
        <a href="#">
          <img src="images/bfchkp_emblem.jpg" className={styles.emblem} />
        </a>
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
            </li> 
            
            <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Font Awesome-->
    <script src="https://kit.fontawesome.com/c0af3a3abc.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Fira+Sans:wght@400;500;700&family=Montserrat:wght@900&display=swap" rel="stylesheet">
    <title>БФЧКП — Белорусская Федерация Чирлидинга и Команд Поддержки</title>
</head> */}
        </ul>
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
  </header>
    
  )
}
