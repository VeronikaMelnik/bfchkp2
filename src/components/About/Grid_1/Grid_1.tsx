import styles from "./Grid_1.module.scss";
import Image from "next/image";

export const Grid_1 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo_1}>
        <div className={styles.caption}>Чирлидинг</div>
        <Image
          className={styles.grid_image}
          width={520}
          height={860}
          src={"/images/main/12.jpg"}
          alt={"1"}
        />
      </div>
      <div className={styles.photo_2}>
        <div className={styles.caption}>Фристайл пом</div>
        <Image
          className={styles.grid_image}
          width={520}
          height={350}
          src={"/images/main/24.jpg"}
          alt={"1"}
        />
      </div>
      <div className={styles.photo_3}>
        <div className={styles.caption}>Чир Джаз</div>
        <Image
          className={styles.grid_image}
          width={520}
          height={350}
          src={"/images/main/30.jpg"}
          alt={"1"}
        />
      </div>
      <div className={styles.photo_4}>
        <div className={styles.caption}>Чир Хип-Хоп</div>
        <Image
          className={styles.grid_image}
          width={1050}
          height={525}
          src={"/images/main/42.jpg"}
          alt={"1"}
        />
      </div>
    </div>
  );
};
