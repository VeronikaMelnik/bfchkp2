"use server";
import classNames from "classnames";
import { LanguageEnum } from "@entities/constants";
import { BurgerMenu } from "./BurgerMenu";
import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { MiddleMenu } from "./MiddleMenu";

interface Props {
  className?: string;
  lang: LanguageEnum;
}

export const Header = async ({ className, lang }: Props) => {
  return (
    <header className={classNames(styles.wrapper, className)}>
      <Logo />
      <MiddleMenu lang={lang} />
      <BurgerMenu lang={lang} />
    </header>
  );
};
