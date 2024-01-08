import styles from "./page.module.scss";
import { ImagesBlock } from "@/components/ImagesBlock/ImagesBlock";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImagesBlock />
    </main>
  );
}
