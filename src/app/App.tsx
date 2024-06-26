import { Suspense, memo } from 'react';
import { ToastContainer } from 'react-toastify';
import { Footer } from '@widgets/Footer';
import { Header } from '@widgets/Header';
import { MainLayout } from '@widgets/layouts';
import { SideBar } from '@widgets/SideBar';
import { useUser } from '@features/User/hook';
import {
  useAdminSidebarConfig,
  useCoachJudgeSidebarConfig,
  useCoachSidebarConfig,
  useJudgeSidebarConfig,
  useUserMenuConfig,
  useUserSidebarConfig,
} from './config';
import { AppRouter } from './providers/router';

const App = memo(() => {
  const { isAdmin, isCoach, isJudge, user } = useUser();
  const adminConfig = useAdminSidebarConfig();
  const userConfig = useUserSidebarConfig();
  const coachJudgeConfig = useCoachJudgeSidebarConfig();
  const coachConfig = useCoachSidebarConfig();
  const judgeConfig = useJudgeSidebarConfig();
  const userMenuConfig = useUserMenuConfig();

  const burgerMenuConfig = isAdmin
    ? [...adminConfig, ...userMenuConfig]
    : isCoach && isJudge
      ? [...coachJudgeConfig, ...userMenuConfig]
      : isCoach
        ? [...coachConfig, ...userMenuConfig]
        : isJudge
          ? [...judgeConfig, ...userMenuConfig]
          : [...userConfig, ...userMenuConfig];
  return (
    <div className="app" id="app">
      <ToastContainer />
      <Suspense fallback="">
        <MainLayout
          header={<Header />}
          content={<AppRouter />}
          sidebar={
            <SideBar
              config={
                isAdmin
                  ? adminConfig
                  : isCoach && isJudge
                    ? coachJudgeConfig
                    : isCoach
                      ? coachConfig
                      : isJudge
                        ? judgeConfig
                        : userConfig
              }
            />
          }
          footer={<Footer />}
          burgerMenu={<SideBar config={burgerMenuConfig} />}
          userMenu={user ? <SideBar config={userMenuConfig} /> : undefined}
        />
      </Suspense>
    </div>
  );
});

export default App;
