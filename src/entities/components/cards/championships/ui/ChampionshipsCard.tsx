import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { IconMask } from '@shared/icons';
import { Badge, Card, Text } from '@shared/ui';
import styles from './ChampionshipsCard.module.scss';

interface Props {
  className?: string;
  nameTitle: string;
  judges?: [string];
  disciplines?: [string];
  lastName?: string;
  link?: string;

  published_date: string;
}

export const ChampionshipsCard = ({
  className,
  nameTitle,
  judges,
  disciplines,
  lastName,
  published_date,
  link = '',
}: Props) => {
  return (
    <Link to={link}>
      <Card
        padding={0}
        flexDirection="column"
        gap={0}
        className={classNames(className)}
      >
        <Badge color="dark" className={styles.timeStamp}>
          {published_date}
        </Badge>
        <div className={styles.text}>
          <Text className={styles.title} fontWeight="semibold" variant="body16">
            {nameTitle}
            <div className={styles.lastName}>{lastName}</div>
          </Text>
          {judges?.map((el, index) => {
            return (
              <div className={styles.row} key={`HeatingCard-alarm-${index}`}>
                <Text variant="body14" fontWeight="regular">
                  {el}
                </Text>
              </div>
            );
          })}
          {disciplines?.map((el, index) => {
            return (
              <div className={styles.row} key={`HeatingCard-alarm-${index}`}>
                <Text variant="body14" fontWeight="regular">
                  {el}
                </Text>
                <IconMask width={24} height={24} className={styles.alarmIcon} />
              </div>
            );
          })}
        </div>
      </Card>
    </Link>
  );
};
