import { useTranslation } from 'react-i18next';
import { NavItemProps } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { IconDocumentHolder, IconMask } from '@shared/icons';

export const useJudgeSidebarConfig: () => Array<NavItemProps> = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('sidebar.user'),
      icon: IconMask,
      href: AppRoutes[AppRoutesEnum.USER](),
      isLink: true,
    },
    {
      title: t('sidebar.results'),
      icon: IconDocumentHolder,
      href: AppRoutes[AppRoutesEnum.ADMIN_RESULTS](),
      isLink: true,
    },
  ];
};
