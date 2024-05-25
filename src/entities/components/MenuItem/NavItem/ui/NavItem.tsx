import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { IconArrow } from '@shared/icons';
import { Text } from '@shared/ui';
import { NavItemProps } from '../../types';
import { useNavItem } from '../hook';
import styles from './NavItem.module.scss';

interface Props extends NavItemProps {
  pathname: string;
}

export const NavItem = ({
  href,
  pathname,
  icon: Icon,
  title,
  breadcrumbs,
  isLink,
  // acceptedGroups,
  onClick,
}: Props) => {
  const {
    breadcrumbElementArr,
    isExpanded,
    handleToggleBreadcrumbs,
    isActive,
  } = useNavItem({ href, pathname, breadcrumbs });

  if (isLink) {
    return (
      <div>
        <NavLink
          to={href}
          className={classNames(styles.item, styles.navLink, {
            [styles.active]: isActive,
          })}
        >
          <Icon width={20} theme={isActive ? 'dark' : 'light'} />
          <Text fontWeight="medium" variant="body14">
            {title}
          </Text>
        </NavLink>

        <div className={styles.wrapper}>
          {<ul className={styles.list}>{breadcrumbElementArr}</ul>}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper} onClick={onClick}>
        <div
          onClick={handleToggleBreadcrumbs}
          className={classNames(styles.item, styles.navLink, {
            [styles.active]: isActive,
          })}
        >
          <Icon width={20} theme={isActive ? 'dark' : 'light'} />
          <Text fontWeight="medium" variant="body14">
            {title}
          </Text>
          {!!breadcrumbElementArr?.length && (
            <IconArrow rotate={isExpanded ? 180 : 270} />
          )}
        </div>
        {breadcrumbElementArr && !!breadcrumbElementArr.length && (
          <ul
            className={classNames(styles.list, {
              [styles.hide]: isExpanded,
            })}
          >
            {breadcrumbElementArr}
          </ul>
        )}
      </div>
    );
  }
};
