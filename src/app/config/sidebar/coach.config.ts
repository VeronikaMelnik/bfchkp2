import { useTranslation } from 'react-i18next';
import { NavItemProps } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { IconLoudspeaker, IconMask, IconEyeOpen } from '@shared/icons';

export const useCoachSidebarConfig: () => Array<NavItemProps> = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('sidebar.user'),
      icon: IconMask,
      href: AppRoutes[AppRoutesEnum.USER](),
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
      icon: IconEyeOpen,
      href: AppRoutes[AppRoutesEnum.ADMIN_MEMBERS](),
      isLink: true,
    },
  ];
};
