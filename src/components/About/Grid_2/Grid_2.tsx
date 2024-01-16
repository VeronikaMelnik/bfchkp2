import styles from "./Grid_2.module.scss";
import Image from "next/image";

export const Grid_2 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo_1}>
        <Image
          className={styles.grid_image}
          width={520}
          height={350}
          src={"/images/main/44.jpg"}
          alt={"1"}
        />
      </div>
      <div className={styles.photo_2}>
        <Image
          className={styles.grid_image}
          width={520}
          height={350}
          src={"/images/main/47.jpg"}
          alt={"1"}
        />
      </div>
      <div className={styles.photo_3}>
        <Image
          className={styles.grid_image}
          width={520}
          height={350}
          src={"/images/main/48.jpg"}
          alt={"1"}
        />
      </div>
      <div className={styles.photo_4}>
        <Image
          className={styles.grid_image}
          width={520}
          height={350}
          src={"/images/main/46.jpg"}
          alt={"1"}
        />
      </div>
    </div>
  );
};
