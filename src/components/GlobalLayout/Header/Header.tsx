import styles from "./Header.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "./Carousel/Carousel";
import { UserButton } from "./UserButton/UserButton";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.element}>
        <Link href={"/"}>
          <Image
            className={styles.image}
            width={136}
            height={85}
            src={"/images/bfchkp_emblem.jpg"}
            alt="bfchkp-logo"
          />
        </Link>
        <ul className={styles.list}>
          <li>
            <a href="/members">ЧЛЕНЫ</a>
          </li>
          <li>
            <a href="/comp">Соревнования</a>
          </li>
          <li>
            <a href="/coaches">Тренеры</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
        </ul>
      </div>
      <UserButton />
      <Carousel />
    </header>
  );
};
