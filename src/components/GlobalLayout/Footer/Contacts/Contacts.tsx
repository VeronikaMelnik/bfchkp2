import styles from "./Contacts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faVk,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas);

export const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.socials1}>
        <a href="tel:+375293267922" className={styles.a}>
          <FontAwesomeIcon icon="phone" className={styles.icon} /> &nbsp;
          +375(29)326-79-22
        </a>
        <a href="mailto:veronikamelnik00@mail.ru" className={styles.a}>
          <FontAwesomeIcon icon="envelope" className={styles.icon} /> &nbsp;
          cheerleader@tut.by
        </a>
      </div>
      <div className={styles.socials2}>
        <a
          href="https://www.instagram.com/belarus_cheer/"
          target="_blank"
          rel="noreferrer"
          className={styles.a}
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a
          href="https://www.youtube.com/@cheerleadinginbelarus4366"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
        </a>
        <a href="https://vk.com/bfchkp" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faVk} className={styles.icon} />
        </a>
      </div>
    </div>
  );
};
