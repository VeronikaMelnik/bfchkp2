import styles from "./Contacts.module.scss";
import { Envelope } from "./Envelope/Envelope";
import { Instagram } from "./Instagram/Instagram";
import { Phone } from "./Phone/Phone";
import { Vk } from "./Vk/Vk";
import { Youtube } from "./Youtube/Youtube";

export const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.socials1}>
        <a href="tel:+375293267922" className={styles.a}>
          <Phone />
          <p className={styles.text}>+375(29)326-79-22</p>
        </a>
        <a href="mailto:veronikamelnik00@mail.ru" className={styles.a}>
          <Envelope />
          <p className={styles.text}>cheerleader@tut.by</p>
        </a>
      </div>
      <div className={styles.socials2}>
        <a
          href="https://www.instagram.com/belarus_cheer/"
          target="_blank"
          rel="noreferrer"
          className={styles.a}
        >
          <div className={styles.icon}><Instagram /></div>
        </a>
        <a
          href="https://www.youtube.com/@cheerleadinginbelarus4366"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.icon}><Youtube /></div>
        </a>
        <a href="https://vk.com/bfchkp" target="_blank" rel="noreferrer">
          <div className={styles.icon}><Vk /></div>
        </a>
      </div>
    </div>
  );
};
