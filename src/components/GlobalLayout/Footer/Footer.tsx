/* eslint-disable prettier/prettier */
import { Contacts } from './Contacts/Contacts';
import { Text } from './Text/Text';
import styles from './Footer.module.scss';
import { Telegram } from './Telegram/Telegram';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Text />
      <Contacts />
      <Telegram />
    </footer>
  );
};
