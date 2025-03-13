import { Navigate, RouteObject } from "react-router-dom";

import * as features from "./features/";

export const aproposRoutes: RouteObject[] = [
  {
    path: "apropos",
    children: [
      {
        element: <Navigate to="/apropos/home" replace />,
        index: true,
      },
      {
        path: "home",
        element: <features.HomePage />,
      },
    ],
  },
];
