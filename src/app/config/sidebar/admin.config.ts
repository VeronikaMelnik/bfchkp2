import { useTranslation } from 'react-i18next';
import { NavItemProps } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import {
  IconHome,
  IconLoudspeaker,
  IconQuestion,
  IconCalendarX,
  IconMask,
} from '@shared/icons';

export const useAdminSidebarConfig: () => Array<NavItemProps> = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('sidebar.news'),
      icon: IconHome,
      href: AppRoutes[AppRoutesEnum.ADMIN_NEWS](),
      isLink: true,
    },
    {
      title: t('sidebar.user'),
      icon: IconMask,
      href: AppRoutes[AppRoutesEnum.USER](),
      isLink: true,
    },
    {
      title: t('sidebar.results'),
      icon: IconCalendarX,
      href: AppRoutes[AppRoutesEnum.ADMIN_RESULTS](),
      isLink: true,
    },
    {
      title: t('sidebar.teams'),
      icon: IconLoudspeaker,
      href: AppRoutes[AppRoutesEnum.ADMIN_TEAMS](),
      isLink: true,
    },
    {
      title: t('sidebar.members'),
      icon: IconQuestion,
      href: AppRoutes[AppRoutesEnum.ADMIN_MEMBERS](),
      isLink: true,
    },
  ];
};
