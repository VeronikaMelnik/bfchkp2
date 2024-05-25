import {
  AdminNewsListPage,
  AdminTeamsListPage,
  CreateNewsPage,
} from '@pages/admin';
import { AdminMembersListPage } from '@pages/admin/Members';
import { UpdateNewsPage } from '@pages/admin/News/Update';
import { AdminResutsListPage } from '@pages/admin/Results';
import { LoginPage, RegistrationPage } from '@pages/Auth';
import { CoachesPage } from '@pages/coaches';
import { DisciplinesPage } from '@pages/disciplines';
import { ForbiddenPage } from '@pages/Forbidden';
import { JudgesPage } from '@pages/judges';
import { UpdateUserPage } from '@pages/me';
import { UserPage } from '@pages/me/Current';
import { MembersPage } from '@pages/members';
import { CurrentNewsPage } from '@pages/news';
import { NewsListPage } from '@pages/news';
import { NotFoundPage } from '@pages/NotFound';
import { ResultsPage } from '@pages/results';
import { TeamsPage } from '@pages/teams';
import { TitlesPage } from '@pages/titles';
import { AppRoutesEnum, AppRoutes, ROLES_ADMIN } from '@shared/constants';
import { AppRoutesProps } from '@shared/types';

export const routeConfig: Partial<Record<AppRoutesEnum, AppRoutesProps>> = {
  [AppRoutesEnum.ADMIN_NEWS]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_NEWS](),
    element: <AdminNewsListPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.UPDATE_NEWS]: {
    path: AppRoutes[AppRoutesEnum.UPDATE_NEWS](':id'),
    element: <UpdateNewsPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.CREATE_NEWS]: {
    path: AppRoutes[AppRoutesEnum.CREATE_NEWS](),
    element: <CreateNewsPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.ADMIN_RESULTS]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_RESULTS](),
    element: <AdminResutsListPage />,
    authOnly: true,
  },
  [AppRoutesEnum.UPDATE_RESULTS]: {
    path: AppRoutes[AppRoutesEnum.UPDATE_RESULTS](':id'),
    element: <NotFoundPage />,
    authOnly: true,
  },
  [AppRoutesEnum.CREATE_RESULTS]: {
    path: AppRoutes[AppRoutesEnum.CREATE_RESULTS](),
    element: <NotFoundPage />,
    authOnly: true,
  },
  [AppRoutesEnum.ADMIN_MEMBERS]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_MEMBERS](),
    element: <AdminMembersListPage />,
    authOnly: true,
  },
  [AppRoutesEnum.UPDATE_MEMBERS]: {
    path: AppRoutes[AppRoutesEnum.UPDATE_MEMBERS](':id'),
    element: <NotFoundPage />,
    authOnly: true,
  },
  [AppRoutesEnum.CREATE_MEMBERS]: {
    path: AppRoutes[AppRoutesEnum.CREATE_MEMBERS](),
    element: <NotFoundPage />,
    authOnly: true,
  },
  [AppRoutesEnum.ADMIN_TEAMS]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_TEAMS](),
    element: <AdminTeamsListPage />,
    authOnly: true,
  },
  [AppRoutesEnum.UPDATE_TEAMS]: {
    path: AppRoutes[AppRoutesEnum.UPDATE_TEAMS](':id'),
    element: <NotFoundPage />,
    authOnly: true,
  },
  [AppRoutesEnum.CREATE_TEAMS]: {
    path: AppRoutes[AppRoutesEnum.CREATE_TEAMS](),
    element: <NotFoundPage />,
    authOnly: true,
  },
  [AppRoutesEnum.ADMIN_EVENTS]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_EVENTS](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.UPDATE_EVENT]: {
    path: AppRoutes[AppRoutesEnum.UPDATE_EVENT](':id'),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.CREATE_EVENT]: {
    path: AppRoutes[AppRoutesEnum.CREATE_EVENT](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.ADMIN_MEETINGS]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_MEETINGS](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.UPDATE_MEETINGS]: {
    path: AppRoutes[AppRoutesEnum.UPDATE_MEETINGS](':id'),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.CREATE_MEETINGS]: {
    path: AppRoutes[AppRoutesEnum.CREATE_MEETINGS](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.ADMIN_LOYALTY]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_LOYALTY](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.ADMIN_NOTIFICATIONS]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_NOTIFICATIONS](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.ADMIN_TECHNICAL_WORKS]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_TECHNICAL_WORKS](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.ADMIN_VOTING]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_VOTING](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.ADMIN_SETTINGS]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_SETTINGS](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.USERS]: {
    path: AppRoutes[AppRoutesEnum.USERS](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.PASSPORT]: {
    path: AppRoutes[AppRoutesEnum.PASSPORT](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.INFORM]: {
    path: AppRoutes[AppRoutesEnum.INFORM](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.INVOCATION]: {
    path: AppRoutes[AppRoutesEnum.INVOCATION](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.ENGINEERING]: {
    path: AppRoutes[AppRoutesEnum.ENGINEERING](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.SECURITY]: {
    path: AppRoutes[AppRoutesEnum.SECURITY](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.SECURITY_ACCESS]: {
    path: AppRoutes[AppRoutesEnum.SECURITY_ACCESS](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.SECURITY_INTERCOM]: {
    path: AppRoutes[AppRoutesEnum.SECURITY_INTERCOM](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.SECURITY_VIDEO]: {
    path: AppRoutes[AppRoutesEnum.SECURITY_VIDEO](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },

  [AppRoutesEnum.STATISTIC]: {
    path: AppRoutes[AppRoutesEnum.STATISTIC](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.ACCOUNTING]: {
    path: AppRoutes[AppRoutesEnum.ACCOUNTING](),
    element: <NotFoundPage />,
    authOnly: true,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.NEWS_CURRENT]: {
    path: AppRoutes[AppRoutesEnum.NEWS_CURRENT](':id'),
    element: <CurrentNewsPage />,
    authOnly: false,
  },
  [AppRoutesEnum.EVENT_CURRENT]: {
    path: AppRoutes[AppRoutesEnum.EVENT_CURRENT](':id'),
    element: <NotFoundPage />,
    authOnly: false,
  },
  [AppRoutesEnum.MEETINGS_CURRENT]: {
    path: AppRoutes[AppRoutesEnum.MEETINGS_CURRENT](':id'),
    element: <NotFoundPage />,
    authOnly: false,
  },
  [AppRoutesEnum.LOGIN]: {
    path: AppRoutes[AppRoutesEnum.LOGIN](),
    element: <LoginPage />,
    authOnly: false,
  },
  [AppRoutesEnum.REGISTRATION]: {
    path: AppRoutes[AppRoutesEnum.REGISTRATION](),
    element: <RegistrationPage />,
    authOnly: false,
  },

  [AppRoutesEnum.NEWS]: {
    path: AppRoutes[AppRoutesEnum.NEWS](),
    element: <NewsListPage />,
    authOnly: false,
  },
  [AppRoutesEnum.USER]: {
    path: AppRoutes[AppRoutesEnum.USER](),
    element: <UserPage />,
    authOnly: true,
  },

  [AppRoutesEnum.UPDATE_USER]: {
    path: AppRoutes[AppRoutesEnum.UPDATE_USER](),
    element: <UpdateUserPage />,
    authOnly: true,
  },
  [AppRoutesEnum.CHAMPIONSHIPS]: {
    path: AppRoutes[AppRoutesEnum.CHAMPIONSHIPS](),
    element: <NotFoundPage />,
    authOnly: false,
  },
  [AppRoutesEnum.RESULTS]: {
    path: AppRoutes[AppRoutesEnum.RESULTS](),
    element: <ResultsPage />,
    authOnly: false,
  },
  [AppRoutesEnum.JUDGES]: {
    path: AppRoutes[AppRoutesEnum.JUDGES](),
    element: <JudgesPage />,
    authOnly: false,
  },
  [AppRoutesEnum.TEAMS]: {
    path: AppRoutes[AppRoutesEnum.TEAMS](),
    element: <TeamsPage />,
    authOnly: false,
  },
  [AppRoutesEnum.COACHES]: {
    path: AppRoutes[AppRoutesEnum.COACHES](),
    element: <CoachesPage />,
    authOnly: false,
  },
  [AppRoutesEnum.MEMBERS]: {
    path: AppRoutes[AppRoutesEnum.MEMBERS](),
    element: <MembersPage />,
    authOnly: false,
  },
  [AppRoutesEnum.DISCIPLINES]: {
    path: AppRoutes[AppRoutesEnum.DISCIPLINES](),
    element: <DisciplinesPage />,
    authOnly: false,
  },
  [AppRoutesEnum.TITLES]: {
    path: AppRoutes[AppRoutesEnum.TITLES](),
    element: <TitlesPage />,
    authOnly: false,
  },
  [AppRoutesEnum.POSTER]: {
    path: AppRoutes[AppRoutesEnum.POSTER](),
    element: <NotFoundPage />,
    authOnly: false,
  },
  [AppRoutesEnum.ACTIVITY]: {
    path: AppRoutes[AppRoutesEnum.ACTIVITY](),
    element: <NotFoundPage />,
    authOnly: false,
  },
  [AppRoutesEnum.SERVICES]: {
    path: AppRoutes[AppRoutesEnum.SERVICES](),
    element: <NotFoundPage />,
    authOnly: false,
  },
  [AppRoutesEnum.REQUESTS]: {
    path: AppRoutes[AppRoutesEnum.REQUESTS](),
    element: <NotFoundPage />,
    authOnly: true,
    // acceptedRoles: [],
  },
  [AppRoutesEnum.REQUESTS_CREATE]: {
    path: AppRoutes[AppRoutesEnum.REQUESTS_CREATE](),
    element: <NotFoundPage />,
    authOnly: true,
    // acceptedRoles: [],
  },
  [AppRoutesEnum.REQUESTS_CURRENT]: {
    path: AppRoutes[AppRoutesEnum.REQUESTS_CURRENT](':id'),
    element: <NotFoundPage />,
    authOnly: true,
    // acceptedRoles: [],
  },
  [AppRoutesEnum.APPLICATIONS]: {
    path: AppRoutes[AppRoutesEnum.APPLICATIONS](),
    element: <NotFoundPage />,
    // element: <ApplicationsMainPage />,
    authOnly: true,
    // acceptedRoles: [],
  },
  [AppRoutesEnum.APPLICATIONS_CREATE]: {
    path: AppRoutes[AppRoutesEnum.APPLICATIONS_CREATE](),
    element: <NotFoundPage />,
    // element: <CreateApplicationPage />,
    authOnly: true,
    // acceptedRoles: [],
  },
  [AppRoutesEnum.SHUTDOWNS]: {
    path: AppRoutes[AppRoutesEnum.SHUTDOWNS](),
    element: <NotFoundPage />,
    authOnly: false,
  },
  [AppRoutesEnum.KNOWLEDGE]: {
    path: AppRoutes[AppRoutesEnum.KNOWLEDGE](),
    element: <NotFoundPage />,
    authOnly: false,
  },
  [AppRoutesEnum.SETTINGS]: {
    path: AppRoutes[AppRoutesEnum.SETTINGS](),
    element: <NotFoundPage />,
    authOnly: false,
  },

  [AppRoutesEnum.FORBIDDEN]: {
    path: AppRoutes[AppRoutesEnum.FORBIDDEN](),
    element: <ForbiddenPage />,
  },

  [AppRoutesEnum.NOT_FOUND]: {
    path: AppRoutes[AppRoutesEnum.NOT_FOUND](),
    element: <NotFoundPage />,
  },
};
