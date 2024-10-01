import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import AboutProject from 'pages/component-overview/aboutProject';

const Color = Loadable(lazy(() => import('pages/component-overview/aboutProject')));
const Typography = Loadable(lazy(() => import('pages/component-overview/upload')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/moreInfo')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <aboutProject />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <moreInfo />
    },
    {
      path: 'typography',
      element: <upload />
    }
  ]
};

export default MainRoutes;
