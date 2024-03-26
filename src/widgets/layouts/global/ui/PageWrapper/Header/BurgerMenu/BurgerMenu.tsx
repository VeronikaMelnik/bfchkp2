"use client";
import classNames from "classnames";
import Link from "next/link";
import styles from "./BurgerMenu.module.scss";
import { MenuIcon } from "./MenuIcon";

interface Props {
  className?: string;
}

export const BurgerMenu = ({ className }: Props) => {
  const navigationMenuItems: Array<{ href: string; item: string }> = [
    { href: "/members", item: "Члены" },
    { href: "/comp", item: "Соревнования" },
    { href: "/coaches", item: "Тренеры" },
    { href: "/about", item: "О нас" },
  ];
  return (
    <div className={classNames(styles.wrapper, className)}>
      <MenuIcon />
      <ul className={styles.list}>
        {navigationMenuItems.map((item, index) => (
          <li className={styles.listItem} key={`NavigationMenuItem-${index}`}>
            <Link className={styles.link} href={item.href}>
              {item.item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
