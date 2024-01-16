import { Sidebar } from "@/components/Sidebar/sidebar";
import styles from "./page.module.scss";
import { Search } from "@/components/Search/search";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Search />
      <h1>Члены федерации</h1>
      <Sidebar />
    </main>
  );
}
