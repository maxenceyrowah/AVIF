import { Navigate, RouteObject } from "react-router-dom";

import * as features from "./features/";

export const engagerRoutes: RouteObject[] = [
  {
    path: "engager",
    children: [
      {
        element: <Navigate to="/engager/home" replace />,
        index: true,
      },
      {
        path: "home",
        element: <features.HomePage />,
      },
      {
        path: "temoignages",
        element: <features.TemoignagesPage />,
      },
      {
        path: "partenaires",
        element: <features.OngPage />,
      },
    ],
  },
];
