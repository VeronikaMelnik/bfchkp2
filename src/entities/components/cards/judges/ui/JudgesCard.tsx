import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Card, Text } from '@shared/ui';
import styles from './JudgesCard.module.scss';

interface Props {
  className?: string;
  image?: string;
  name: string;
  lastName: string;
  link?: string;
}

export const JudgesCard = ({
  className,
  image,
  name,
  lastName,
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
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <div className={styles.text}>
          <Text className={styles.title} fontWeight="semibold" variant="body16">
            {name}
            <div className={styles.lastName}>{lastName}</div>
          </Text>
        </div>
      </Card>
    </Link>
  );
};
