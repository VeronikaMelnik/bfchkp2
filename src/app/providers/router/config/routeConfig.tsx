import {
  AdminNewsListPage,
  AdminTeamsListPage,
  CreateNewsPage,
  CreateTeamsPage,
  UpdateTeamsPage,
} from '@pages/admin';
import { AdminMembersListPage, CreateMembersPage } from '@pages/admin/Members';
import { UpdateNewsPage } from '@pages/admin/News/Update';
import { AdminResutsListPage } from '@pages/admin/Results';
import { CreateResultsPage } from '@pages/admin/Results/Create';
import { UpdateResultsPage } from '@pages/admin/Results/Update';
import { LoginPage, RegistrationPage } from '@pages/Auth';
import { ChampionshipsListPage } from '@pages/championships';
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
    element: <UpdateResultsPage />,
    authOnly: true,
  },
  [AppRoutesEnum.CREATE_RESULTS]: {
    path: AppRoutes[AppRoutesEnum.CREATE_RESULTS](),
    element: <CreateResultsPage />,
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
    element: <CreateMembersPage />,
    authOnly: true,
  },
  [AppRoutesEnum.ADMIN_TEAMS]: {
    path: AppRoutes[AppRoutesEnum.ADMIN_TEAMS](),
    element: <AdminTeamsListPage />,
    authOnly: true,
  },
  [AppRoutesEnum.UPDATE_TEAMS]: {
    path: AppRoutes[AppRoutesEnum.UPDATE_TEAMS](':id'),
    element: <UpdateTeamsPage />,
    authOnly: true,
  },
  [AppRoutesEnum.CREATE_TEAMS]: {
    path: AppRoutes[AppRoutesEnum.CREATE_TEAMS](),
    element: <CreateTeamsPage />,
    authOnly: true,
  },

  [AppRoutesEnum.USERS]: {
    path: AppRoutes[AppRoutesEnum.USERS](),
    element: <NotFoundPage />,
    authOnly: false,
    acceptedRoles: ROLES_ADMIN,
  },
  [AppRoutesEnum.NEWS_CURRENT]: {
    path: AppRoutes[AppRoutesEnum.NEWS_CURRENT](':id'),
    element: <CurrentNewsPage />,
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
    element: <ChampionshipsListPage />,
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
  [AppRoutesEnum.FORBIDDEN]: {
    path: AppRoutes[AppRoutesEnum.FORBIDDEN](),
    element: <ForbiddenPage />,
  },

  [AppRoutesEnum.NOT_FOUND]: {
    path: AppRoutes[AppRoutesEnum.NOT_FOUND](),
    element: <NotFoundPage />,
  },
};
