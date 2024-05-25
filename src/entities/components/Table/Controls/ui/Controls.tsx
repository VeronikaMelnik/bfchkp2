import classNames from 'classnames';
import { MouseEventHandler } from 'react';
import {
  IconCalendarX,
  IconDottedLine,
  IconEyeOpen,
  IconLock,
  IconPencil,
} from '@shared/icons';
import { Card } from '@shared/ui';
import { PopUpMenuItem } from '../../../PopUpMenuItem';
import { useVideoCardControls } from '../hook';
import styles from './Controls.module.scss';

interface Props {
  className?: string;
  id: number;
  point?: {
    lat?: number;
    lon?: number;
  };
  getNotificationRoute?: (id: number) => string;
  notificationFunction?: (id: number) => void;
  getUpdateRoute?: false | ((id: number) => string);
  getDetailsRoute?: false | ((id: number) => string);
  getDetails?: false | (() => void);
  onDelete?: MouseEventHandler<HTMLDivElement> | false;
  onOpen?: MouseEventHandler<HTMLDivElement> | false;
  onMarkAsFailed?: MouseEventHandler<HTMLDivElement> | false;
  rotateIcon?: boolean;
}

export const TableControls = ({
  className,
  id,
  point,
  getDetailsRoute,
  getUpdateRoute,
  getNotificationRoute,
  onDelete,
  onOpen,
  rotateIcon,
  notificationFunction,
  onMarkAsFailed,
  getDetails,
}: Props) => {
  const {
    handleGoToDetails,
    handleGoToUpdate,
    handleGoToNotificate,
    isShow,
    setIsShow,
    handleMapOpen,
    t,
    wrapperRef,
  } = useVideoCardControls({
    id,
    getDetailsRoute,
    getUpdateRoute,
    getNotificationRoute,
    point,
  });
  return (
    <div
      className={classNames(styles.wrapper, className)}
      onClick={() => {
        setIsShow((val) => !val);
      }}
      ref={wrapperRef}
    >
      <IconDottedLine rotate={rotateIcon ? 90 : 0} width={20} height={20} />
      {isShow && (
        <Card
          padding={6}
          flexDirection="column"
          className={classNames(styles.popup, className)}
        >
          {!!getDetails && (
            <PopUpMenuItem
              onClick={getDetails}
              icon={<IconEyeOpen width={20} hanging={20} />}
              text={t('popup.preview')}
            />
          )}
          {!!getDetailsRoute && (
            <PopUpMenuItem
              onClick={handleGoToDetails}
              icon={<IconEyeOpen width={20} hanging={20} />}
              text={t('popup.preview')}
            />
          )}
          {getUpdateRoute && (
            <PopUpMenuItem
              onClick={handleGoToUpdate}
              icon={<IconPencil width={20} hanging={20} />}
              text={t('popup.edit')}
            />
          )}
          {getNotificationRoute && (
            <PopUpMenuItem
              onClick={handleGoToNotificate}
              icon={<IconPencil width={20} hanging={20} />}
              text={t('popup.personal_notification')}
            />
          )}
          {notificationFunction && (
            <PopUpMenuItem
              onClick={() => notificationFunction(id)}
              icon={<IconPencil width={20} hanging={20} />}
              text={t('popup.personal_notification')}
            />
          )}
          {point && (
            <PopUpMenuItem
              onClick={handleMapOpen}
              icon={<IconPencil width={20} hanging={20} />}
              text={t('popup.map')}
            />
          )}
          {onOpen && (
            <PopUpMenuItem
              onClick={onOpen}
              icon={<IconLock width={20} hanging={20} />}
              text={t('popup.open')}
            />
          )}
          {onMarkAsFailed && (
            <PopUpMenuItem
              onClick={onMarkAsFailed}
              icon={<IconCalendarX width={20} hanging={20} />}
              text={t('popup.markAsFailed')}
            />
          )}
          {onDelete && (
            <PopUpMenuItem
              className={styles.danger}
              onClick={onDelete}
              icon={<IconPencil width={20} hanging={20} />}
              text={t('popup.delete')}
            />
          )}
        </Card>
      )}
    </div>
  );
};
