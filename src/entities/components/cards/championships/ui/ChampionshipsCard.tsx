import classNames from 'classnames';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Badge, Card, Text } from '@shared/ui';
import styles from './ChampionshipsCard.module.scss';

interface Props {
  className?: string;
  nameTitle: string;
  name?: string;
  lastName?: string;
  link?: string;

  published_date: Date;
}

export const ChampionshipsCard = ({
  className,
  nameTitle,
  name,
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
          {format(published_date, 'dd.MM.yyyy')}
        </Badge>
        <div className={styles.text}>
          <Text className={styles.title} fontWeight="semibold" variant="body16">
            {nameTitle}
          </Text>
          <Text
            className={styles.textContent}
            fontWeight="regular"
            variant="body14"
          >
            {name}
            <div className={styles.lastName}>{lastName}</div>
          </Text>
        </div>
      </Card>
    </Link>
  );
};
