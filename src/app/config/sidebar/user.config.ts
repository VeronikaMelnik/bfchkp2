import { useTranslation } from 'react-i18next';
import { NavItemProps } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import {
  IconHome,
  IconMask,
  IconLoudspeaker,
  IconDocumentHolder,
  IconCalendarX,
  IconQuestion,
} from '@shared/icons';

export const useUserSidebarConfig: () => Array<NavItemProps> = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('sidebar.news'),
      icon: IconHome,
      href: AppRoutes[AppRoutesEnum.NEWS](),
      isLink: true,
    },
    {
      title: t('sidebar.user'),
      icon: IconMask,
      href: AppRoutes[AppRoutesEnum.USER](),
      isLink: true,
    },
    {
      title: t('sidebar.championships'),
      icon: IconDocumentHolder,
      href: AppRoutes[AppRoutesEnum.CHAMPIONSHIPS](),
      isLink: true,
      breadcrumbs: [
        {
          href: AppRoutes[AppRoutesEnum.RESULTS](),
          title: t('sidebar.results'),
        },
        {
          href: AppRoutes[AppRoutesEnum.JUDGES](),
          title: t('sidebar.judges'),
        },
      ],
    },
    {
      title: t('sidebar.teams'),
      icon: IconLoudspeaker,
      href: AppRoutes[AppRoutesEnum.TEAMS](),
      isLink: true,
      breadcrumbs: [
        {
          href: AppRoutes[AppRoutesEnum.COACHES](),
          title: t('sidebar.coaches'),
        },
        {
          href: AppRoutes[AppRoutesEnum.MEMBERS](),
          title: t('sidebar.members'),
        },
      ],
    },
    {
      title: t('sidebar.disciplines'),
      icon: IconCalendarX,
      href: AppRoutes[AppRoutesEnum.DISCIPLINES](),
      isLink: true,
    },
    {
      title: t('sidebar.titles'),
      icon: IconQuestion,
      href: AppRoutes[AppRoutesEnum.TITLES](),
      isLink: true,
    },
  ];
};
