import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { IconEyeOpen, IconPencil } from '@shared/icons';
import { Card, Text } from '@shared/ui';
import styles from './PopUpMenu.module.scss';

interface Props {
  className?: string;
  handleDelete(): void;
  handleGoToDetails(): void;
  handleGoToUpdate(): void;
}

export const PopUpMenu = ({
  className,
  handleGoToDetails,
  handleGoToUpdate,
  handleDelete,
}: Props) => {
  const { t } = useTranslation('table');
  return (
    <Card
      padding={6}
      flexDirection="column"
      className={classNames(styles.wrapper, className)}
    >
      <div className={styles.item} onClick={handleGoToDetails}>
        <IconEyeOpen width={20} hanging={20} />
        <Text fontWeight="regular" variant="body14">
          {t('popup.preview')}
        </Text>
      </div>
      <div className={styles.item} onClick={handleGoToUpdate}>
        <IconPencil width={20} hanging={20} />
        <Text fontWeight="regular" variant="body14">
          {t('popup.edit')}
        </Text>
      </div>
      <div className={styles.item} onClick={handleDelete}>
        <IconPencil width={20} hanging={20} />
        <Text fontWeight="regular" variant="body14">
          {t('popup.delete')}
        </Text>
      </div>
    </Card>
  );
};
