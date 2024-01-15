import styles from "./Telegram.module.scss";

export const Telegram = () => {
  return (
    <form className={styles.wrapper}>
      <label htmlFor="message" className={styles.text}>
        Напишите нам сообщение:
      </label>
      <input type="text" id="message" name="message" />
      <button type="submit" className={styles.button}>
        Отправить
      </button>
    </form>
  );
};
