import classNames from "classnames";
import styles from "./Registration.module.scss";

interface Props {
  className?: string;
}

export const Registration = ({ className }: Props) => {
  return <div className={classNames(styles.wrapper, className)}>

  </div>;
};
