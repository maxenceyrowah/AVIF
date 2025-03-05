import { Navigate, RouteObject } from "react-router-dom";

import * as features from "./features/";

export const inspirerRoutes: RouteObject[] = [
  {
    path: "inspirer",
    children: [
      {
        element: <Navigate to="/inspirer/home" replace />,
        index: true,
      },
      {
        path: "home",
        element: <features.HomePage />,
      },
      {
        path: "temoignages",
        element: <features.TemoignagePage />,
      },
      {
        path: "podcasts",
        element: <features.PodcastsPage />,
      },
      {
        path: "videos",
        element: <features.VideoPage />,
      },
      {
        path: "galeries-et-photos",
        element: <features.GaleriesPage />,
      },
    ],
  },
];
