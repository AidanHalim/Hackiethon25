import { createBrowserRouter } from 'react-router-dom';  // Correct import
import Layout from '../Base/Layout';
import Menu from '../pages/Menu';
import Test from '../pages/Test';

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
      {
        path: "/test",
        element: <Test />,
    }
    ]
  },
];

export const router = createBrowserRouter(routes);