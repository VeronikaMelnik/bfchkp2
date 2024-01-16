import Link from "next/link";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const sidebarMenuItems: Array<{ href: string; item: string }> = [
    { href: "/members", item: "Члены федерации" },
    { href: "/coaches", item: "Тренеры" },
    { href: "/workers", item: "Работники" },
    { href: "/teams", item: "Команды" },
    { href: "/discip", item: "Дисциплины" },
    { href: "/comp", item: "Соревнования" },
    { href: "/results", item: "Результаты соревнований" },
    { href: "/titles", item: "Звания" },
    { href: "/prizes", item: "Призы" },
  ];
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {sidebarMenuItems.map((item, index) => (
          <li className={styles.listItem} key={`SidebarMenuItem-${index}`}>
            <Link className={styles.link} href={item.href}>
              {item.item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
