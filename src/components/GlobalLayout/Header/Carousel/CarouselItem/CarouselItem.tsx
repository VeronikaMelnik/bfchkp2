import Image from "next/image";
import styles from "./CarouselItem.module.scss";

type Props = {
  image: string;
  alt: string;
};

export const CarouselItem = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        width={85}
        height={85}
        src={props.image}
        alt={props.alt}
      />
    </div>
  );
};
