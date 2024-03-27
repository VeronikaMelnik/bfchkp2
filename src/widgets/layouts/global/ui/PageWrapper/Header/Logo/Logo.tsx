import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.scss";

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Link href={"/"}>
        <Image
          className={styles.image}
          width={0}
          height={0}
          sizes="100%"
          src={"/images/bfchkp_emblem.jpg"}
          alt="bfchkp-logo"
        />
      </Link>
    </div>
  );
};
