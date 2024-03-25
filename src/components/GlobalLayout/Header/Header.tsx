import styles from "./Header.module.scss";
import React from "react";
import { NavigationMenu } from "./NavigationMenu/NavigationMenu";
import { Carousel } from "./Carousel/Carousel";
import { UserButton } from "./UserButton/UserButton";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <NavigationMenu />
      <UserButton />
      <Carousel />
    </header>
  );
};
