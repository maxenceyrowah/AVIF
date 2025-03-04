import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import * as features from "./features";

const routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      errorElement: <features.ErrorBoundary />,
      children: [
        {
          element: <Navigate to="/acceuil" replace />,
          index: true,
        },
        { path: "/acceuil", element: <features.LandingPage /> },
      ],
    },
    { path: "*", element: <features.NotFoundPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default routes;
