"use client";

import styles from "./CompetitionsInfo.module.scss";

type Props = Readonly<{
  dict: any;
}>;

export const CompetitionsInfo = ({ dict }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h2>{dict.competitions}</h2>
    </div>
  );
};
