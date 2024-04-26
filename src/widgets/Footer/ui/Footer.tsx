/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/no-unescaped-entities */
import classNames from 'classnames';
import { IconLogo } from '@shared/icons';
import { Text, Title } from '@shared/ui';
import styles from './Footer.module.scss';

interface Props {
  className?: string;
}

export const Footer = ({ className }: Props) => {
  return (
    <footer className={classNames(styles.wrapper, className)}>
      <IconLogo theme="light" height={50} />
      <Title variant="h4" fontWeight="normal">
        ОО "Белорусская федерация чирлидинга и команд поддержки"
      </Title>
      <div className={styles.contacts}>
        <a href={'tel:+375293267922'}>
          <Text>+375(29)326-79-22</Text>
        </a>
        <a>
          <Text>Понедельник-Пятница</Text>
        </a>
        <a>
          <Text>9:00-17:00</Text>
        </a>
      </div>
    </footer>
  );
};
