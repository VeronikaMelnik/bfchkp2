import classNames from "classnames";
import styles from "./RegistrationInfo.module.scss";

interface Props {
  className?: string;
}

export const RegistrationInfo = ({ className }: Props) => {
  return <div className={classNames(styles.wrapper, className)}></div>;
};
