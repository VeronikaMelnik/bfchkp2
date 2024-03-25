import styles from "./Text.module.scss";

export const Text = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Белорусская Федерация Чирлидинга и Команд Поддержки — это спортивная
        организация, созданная Язвиным Олегом Владимировичем для популяризации
        чирлидинга в Беларуси и развитии белорусского спорта.
      </p>
      <p className={styles.phrase}>
        Приходи к нам — окунись в спортивную жизнь!
      </p>
    </div>
  );
};
