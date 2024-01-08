import { Header } from "./Header/Header";
import styles from "./GlobalLayout.module.scss";
import { Footer } from "./Footer/Footer";

type Props = {
  children?: React.ReactNode;
};

export const GlobalLayout = ({ children }: Props) => {
  return (
    <main className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
