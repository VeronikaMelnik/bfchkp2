"use server";
import classNames from "classnames";
import { getHeaderDictionary } from "features/server/localization/header";
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
  const dict = await getHeaderDictionary(lang);
  return (
    <header className={classNames(styles.wrapper, className)}>
      <Logo />
      <MiddleMenu lang={lang} />
      <BurgerMenu lang={lang} />
    </header>
  );
};
