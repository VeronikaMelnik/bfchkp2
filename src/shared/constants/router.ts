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

  REQUESTS,
  REQUESTS_CURRENT,
  REQUESTS_CREATE,
  APPLICATIONS,
  APPLICATIONS_CREATE,

  SHUTDOWNS,
  KNOWLEDGE,
  SETTINGS,

  ACCOUNTING,
  STATISTIC,
  SECURITY,
  SECURITY_ACCESS,
  SECURITY_INTERCOM,
  SECURITY_VIDEO,

  ENGINEERING,
  INVOCATION,
  INFORM,
  PASSPORT,
  USERS,
  ADMIN_SETTINGS,

  ADMIN_NOTIFICATIONS,
  ADMIN_TECHNICAL_WORKS,
  ADMIN_VOTING,
  ADMIN_LOYALTY,

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
  // Admin events
  ADMIN_EVENTS,
  UPDATE_EVENT,
  CREATE_EVENT,
  // Admin meetings
  ADMIN_MEETINGS,
  UPDATE_MEETINGS,
  CREATE_MEETINGS,
  // not found
  NOT_FOUND,
  ADMIN_ROLES,
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

  [AppRoutesEnum.REQUESTS]: () => '/requests',
  [AppRoutesEnum.REQUESTS_CREATE]: () => '/requests/create',
  [AppRoutesEnum.REQUESTS_CURRENT]: (id: number | string) => `/requests/${id}`,
  [AppRoutesEnum.APPLICATIONS]: () => '/applications',
  [AppRoutesEnum.APPLICATIONS_CREATE]: () => '/applications/create',

  [AppRoutesEnum.SHUTDOWNS]: () => '/shutdowns',
  [AppRoutesEnum.KNOWLEDGE]: () => '/knowledge',
  [AppRoutesEnum.SETTINGS]: () => '/settings',

  [AppRoutesEnum.ADMIN_SETTINGS]: () => '/admin/settings',
  [AppRoutesEnum.USERS]: () => '/admin/users',
  [AppRoutesEnum.PASSPORT]: () => '/admin/passport',
  [AppRoutesEnum.INFORM]: () => '/admin/inform',
  [AppRoutesEnum.INVOCATION]: () => '/admin/invocation',
  [AppRoutesEnum.ENGINEERING]: () => '/admin/engineering',

  [AppRoutesEnum.SECURITY]: () => '/admin/security',
  [AppRoutesEnum.SECURITY_ACCESS]: () => '/admin/security/access',
  [AppRoutesEnum.SECURITY_INTERCOM]: () => '/admin/security/intercom',
  [AppRoutesEnum.SECURITY_VIDEO]: () => '/admin/security/video',

  [AppRoutesEnum.STATISTIC]: () => '/admin/statistic',
  [AppRoutesEnum.ACCOUNTING]: () => '/admin/accounting',

  [AppRoutesEnum.ADMIN_NEWS]: () => '/admin',
  [AppRoutesEnum.ADMIN_TEAMS]: () => '/admin/teams',
  [AppRoutesEnum.ADMIN_RESULTS]: () => '/admin/results',
  [AppRoutesEnum.ADMIN_MEMBERS]: () => '/admin/members',
  [AppRoutesEnum.ADMIN_EVENTS]: () => '/admin/events',
  [AppRoutesEnum.ADMIN_MEETINGS]: () => '/admin/meeting',
  [AppRoutesEnum.ADMIN_LOYALTY]: () => '/admin/loyalty',
  [AppRoutesEnum.ADMIN_NOTIFICATIONS]: () => '/admin/notifications',
  [AppRoutesEnum.ADMIN_TECHNICAL_WORKS]: () => '/admin/technical_works',
  [AppRoutesEnum.ADMIN_VOTING]: () => '/admin/voting',

  [AppRoutesEnum.CREATE_EVENT]: () => '/admin/events/create',
  [AppRoutesEnum.CREATE_MEETINGS]: () => '/admin/meeting/create',
  [AppRoutesEnum.CREATE_NEWS]: () => '/admin/news/create',
  [AppRoutesEnum.CREATE_RESULTS]: () => '/admin/results/create',
  [AppRoutesEnum.CREATE_TEAMS]: () => '/admin/teams/create',
  [AppRoutesEnum.CREATE_MEMBERS]: () => '/admin/members/create',

  [AppRoutesEnum.UPDATE_EVENT]: (id: number | string) => `/admin/events/${id}`,
  [AppRoutesEnum.UPDATE_MEETINGS]: (id: number | string) =>
    `/admin/meeting/${id}`,
  [AppRoutesEnum.UPDATE_NEWS]: (id: number | string) => `/admin/news/${id}`,
  [AppRoutesEnum.UPDATE_RESULTS]: (id: number | string) =>
    `/admin/results/${id}`,
  [AppRoutesEnum.UPDATE_TEAMS]: (id: number | string) => `/admin/teams/${id}`,
  [AppRoutesEnum.UPDATE_MEMBERS]: (id: number | string) =>
    `/admin/members/${id}`,

  [AppRoutesEnum.FORBIDDEN]: () => '/forbidden',

  [AppRoutesEnum.NOT_FOUND]: () => '*',
};
