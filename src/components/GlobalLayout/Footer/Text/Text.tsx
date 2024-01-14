import styles from "./Text.module.scss";

export const Text = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>
        Белорусская Федерация Чирлидинга и Команд Поддержки — это спортивная
        организация, созданная Язвиным Олегом Владимировичем для популяризации
        чирлидинга в Беларуси и развитии белорусского спорта.
      </span>
      <span className={styles.phrase}>
        Приходи к нам — окунись в спортивную жизнь!
      </span>
    </div>
  );
};
