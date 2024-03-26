import classNames from "classnames";
import { LanguageEnum } from "@entities/constants";
import { Header } from "./Header";
import styles from "./PageWrapper.module.scss";

interface Props {
  className?: string;
  children: React.ReactNode;
  lang: LanguageEnum;
}

export const PageWrapper = ({ className, children, lang }: Props) => {
  return (
    <main className={classNames(styles.wrapper, className)}>
      <Header lang={lang} />
      {children}
    </main>
  );
};
