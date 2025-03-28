import { createBrowserRouter } from 'react-router-dom';  // Correct import
import Layout from '../Base/Layout';
import Menu from '../pages/Menu';
import Test from '../pages/Test';
import GoalReview from "../pages/GoalReview.jsx";
import GoalCreate from "../pages/GoalCreate.jsx";
import Highlights from "../pages/Highlights.jsx";
import StarRatingPage from '../pages/StarRating.jsx';
import JournalLayout from '../base/JournalLayout.jsx';

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
        path: "journal",
        element: <JournalLayout />,
        children: [
            {
                path: "star-rating",
                element: <StarRatingPage />,
            },
            {
                path: "goal-review",
                element: <GoalReview />,
            },
            {
                path: "goal-create",
                element: <GoalCreate />
            },
            {
                path: "highlights",
                element: <Highlights />
            }
        ]
      },
    ]
  },
];

export const router = createBrowserRouter(routes);