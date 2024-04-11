import classNames from "classnames";
import { getHeaderDictionary } from "features/server/localization/header";
import { LanguageEnum } from "@entities/constants";
import styles from "./MiddleMenu.module.scss";

interface Props {
  className?: string;
  lang: LanguageEnum;
}

export const MiddleMenu = async ({ className, lang }: Props) => {
  const dict = await getHeaderDictionary(lang);
  if (dict === undefined) {
  } else {
    return (
      <div className={classNames(styles.wrapper, className)}>
        {dict.competitions}
      </div>
    );
  }
};
