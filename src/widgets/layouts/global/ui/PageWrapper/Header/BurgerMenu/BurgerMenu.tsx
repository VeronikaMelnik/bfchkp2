"use client";
import classNames from "classnames";
import Link from "next/link";
import { getHeaderDictionary } from "features/server/localization/header";
import { LanguageEnum } from "@entities/constants";
import styles from "./BurgerMenu.module.scss";
import { MenuIcon } from "./MenuIcon";

interface Props {
  className?: string;
  lang: LanguageEnum;
}

export const BurgerMenu = async ({ className, lang }: Props) => {
  const dict = await getHeaderDictionary(lang);
  const navigationMenuItems: Array<{ href: string; item: string }> = [
    { href: "/members", item: dict.members },
    { href: "/comp", item: dict.competitions },
    { href: "/coaches", item: dict.coaches },
    { href: "/about", item: dict.about },
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
