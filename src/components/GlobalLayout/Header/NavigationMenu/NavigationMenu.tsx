import Link from "next/link";
import styles from "./NavigationMenu.module.scss";
import Image from "next/image";

export const NavigationMenu = () => {
  const navigationMenuItems: Array<{ href: string; item: string }> = [
    { href: "/members", item: "Члены" },
    { href: "/comp", item: "Соревнования" },
    { href: "/coaches", item: "Тренеры" },
    { href: "/about", item: "О нас" },
  ];
  return (
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
