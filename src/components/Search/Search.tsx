import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <h5>Поиск</h5> {/* //вставить иконку стрелки */}
      <form action="search.php" method="post">
        <input
          type="text"
          name="search-term"
          className={styles.input}
          placeholder="Введите текст"
        />
      </form>
    </div>
  );
};
