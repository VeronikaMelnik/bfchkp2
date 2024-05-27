export enum AppRoutesEnum {
  // User pages
  NEWS_CURRENT,
  CHAMPIONSHIPS_CURRENT,
  EVENT_CURRENT,
  MEETINGS_CURRENT,
  FORBIDDEN,
  NEWS,
  POSTER,
  ACTIVITY,
  SERVICES,
  CHAMPIONSHIPS,
  RESULTS,
  JUDGES,
  TEAMS,
  COACHES,
  MEMBERS,
  DISCIPLINES,
  TITLES,
  USER,
  UPDATE_USER,

  USERS,

  // Admin results
  ADMIN_RESULTS,
  UPDATE_RESULTS,
  CREATE_RESULTS,

  // Admin teams
  ADMIN_TEAMS,
  UPDATE_TEAMS,
  CREATE_TEAMS,

  // Admin members
  ADMIN_MEMBERS,
  UPDATE_MEMBERS,
  CREATE_MEMBERS,

  // Auth
  LOGIN,
  REGISTRATION,
  // Admin news
  ADMIN_NEWS,
  UPDATE_NEWS,
  CREATE_NEWS,
  // not found
  NOT_FOUND,
  MAIN,
}

export const AppRoutes = {
  [AppRoutesEnum.EVENT_CURRENT]: (id: number | string) => `/event/${id}`,
  [AppRoutesEnum.MEETINGS_CURRENT]: (id: number | string) => `/meeting/${id}`,
  [AppRoutesEnum.LOGIN]: () => '/login',
  [AppRoutesEnum.REGISTRATION]: () => '/registration',
  [AppRoutesEnum.NEWS]: () => '/',
  [AppRoutesEnum.NEWS_CURRENT]: (id: number | string) => `/${id}`,
  [AppRoutesEnum.POSTER]: () => '/poster',
  [AppRoutesEnum.ACTIVITY]: () => '/activity',
  [AppRoutesEnum.SERVICES]: () => '/services',
  [AppRoutesEnum.CHAMPIONSHIPS]: () => '/championships',
  [AppRoutesEnum.CHAMPIONSHIPS_CURRENT]: (id: number | string) =>
    `/championship/${id}`,
  [AppRoutesEnum.RESULTS]: () => '/results',
  [AppRoutesEnum.JUDGES]: () => '/judges',
  [AppRoutesEnum.TEAMS]: () => '/teams',
  [AppRoutesEnum.COACHES]: () => '/coaches',
  [AppRoutesEnum.MEMBERS]: () => '/members',
  [AppRoutesEnum.DISCIPLINES]: () => '/disciplines',
  [AppRoutesEnum.TITLES]: () => '/titles',
  [AppRoutesEnum.USER]: () => '/user',
  [AppRoutesEnum.UPDATE_USER]: () => `/user/update`,

  [AppRoutesEnum.USERS]: () => '/admin/users',

  [AppRoutesEnum.ADMIN_NEWS]: () => '/admin',
  [AppRoutesEnum.ADMIN_TEAMS]: () => '/admin/teams',
  [AppRoutesEnum.ADMIN_RESULTS]: () => '/admin/results',
  [AppRoutesEnum.ADMIN_MEMBERS]: () => '/admin/members',

  [AppRoutesEnum.CREATE_NEWS]: () => '/admin/news/create',
  [AppRoutesEnum.CREATE_RESULTS]: () => '/admin/results/create',
  [AppRoutesEnum.CREATE_TEAMS]: () => '/admin/teams/create',
  [AppRoutesEnum.CREATE_MEMBERS]: () => '/admin/members/create',

  [AppRoutesEnum.UPDATE_NEWS]: (id: number | string) => `/admin/news/${id}`,
  [AppRoutesEnum.UPDATE_RESULTS]: (id: number | string) =>
    `/admin/results/${id}`,
  [AppRoutesEnum.UPDATE_TEAMS]: (id: number | string) => `/admin/teams/${id}`,
  [AppRoutesEnum.UPDATE_MEMBERS]: (id: number | string) =>
    `/admin/members/${id}`,

  [AppRoutesEnum.FORBIDDEN]: () => '/forbidden',

  [AppRoutesEnum.NOT_FOUND]: () => '*',
};
