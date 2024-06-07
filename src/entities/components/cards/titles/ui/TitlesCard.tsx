import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Badge, Card, Text } from '@shared/ui';
import styles from './TitlesCard.module.scss';

interface Props {
  className?: string;
  nameTitle: string;
  name?: string;
  lastName?: string;
  championship?: string;
  link?: string;
}

export const TitlesCard = ({
  className,
  nameTitle,
  name,
  lastName,
  championship,
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
          {championship}
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
