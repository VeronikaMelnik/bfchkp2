import { Sidebar } from "@/components/Sidebar/Sidebar";
import styles from "./page.module.scss";
import { Search } from "@/components/Search/Search";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Search />
      <h1>Члены федерации</h1>
      <Sidebar />
    </main>
  );
}
