"use client";

import styles from "./HomeInfo.module.scss";

type Props = Readonly<{
  dict: any;
}>;

export const HomeInfo = ({ dict }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h2>{dict.bfchkp}</h2>
    </div>
  );
};
