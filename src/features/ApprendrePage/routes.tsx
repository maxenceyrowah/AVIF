import { Navigate, RouteObject } from "react-router-dom";

import * as features from "./features/";

export const apprendreRoutes: RouteObject[] = [
  {
    path: "apprendre",
    children: [
      {
        element: <Navigate to="/apprendre/home" replace />,
        index: true,
      },
      {
        path: "home",
        element: <features.HomePage />,
      },
      {
        path: "mentorat",
        element: <features.MentoratPage />,
      },
      {
        path: "webinaires-et-conferences",
        element: <features.WebinairePage />,
      },
      {
        path: "forums",
        element: <features.ForumsPage />,
      },
    ],
  },
];
