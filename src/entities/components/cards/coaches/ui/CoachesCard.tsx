import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Badge, Card, Text } from '@shared/ui';
import styles from './CoachesCard.module.scss';

interface Props {
  className?: string;
  image?: string;
  name?: string;
  lastName?: string;
  experience?: number | string;
  link?: string;
  team?: string;
}

export const CoachesCard = ({
  className,
  image,
  experience,
  name,
  lastName,
  link = '',
  team,
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
          <Badge color="dark" className={styles.timeStamp}>
            {team}
          </Badge>
        </div>
        <div className={styles.text}>
          <Text className={styles.title} fontWeight="semibold" variant="body16">
            {name}
            <div className={styles.lastName}>{lastName}</div>
          </Text>
          <Text
            className={styles.textContent}
            fontWeight="regular"
            variant="body14"
          >
            {experience}
          </Text>
        </div>
      </Card>
    </Link>
  );
};
