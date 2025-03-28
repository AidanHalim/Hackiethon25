import { createBrowserRouter } from 'react-router-dom';  // Correct import
import Layout from '../Base/Layout';
import Menu from '../pages/Menu';

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [  // Correct property name (lowercase 'children')
      {
        index: true,  // Default route ("/")
        element: <Menu />,
      }
    ]
  },
];

export const router = createBrowserRouter(routes);