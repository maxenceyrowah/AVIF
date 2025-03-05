import { Navigate, RouteObject } from "react-router-dom";

import * as features from "./features/";

export const defendreRoutes: RouteObject[] = [
  {
    path: "defendres",
    children: [
      {
        element: <Navigate to="/defendres/home" replace />,
        index: true,
      },
      {
        path: "home",
        element: <features.HomePage />,
      },
      {
        path: "comprendre-mes-droits",
        element: <features.DroitsPage />,
      },
      {
        path: "lois-et-conventions",
        element: <features.LoisPage />,
      },
      {
        path: "outils-pour-agir",
        element: <features.OutilsPage />,
      },
    ],
  },
];
