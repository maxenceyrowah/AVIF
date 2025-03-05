import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "@components/AppLoyout";
import * as features from "./features";
import { ScrollToTop } from "./shared/utils";

const routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <features.ErrorBoundary />,
      element: (
        <AppLayout key="app-layout">
          <ScrollToTop />
          <Outlet />
        </AppLayout>
      ),
      children: [
        {
          element: <Navigate to="/acceuil" replace />,
          index: true,
        },
        {
          path: "/acceuil",
          element: (
            <>
              <ScrollToTop />
              <features.LandingPage />
            </>
          ),
        },
        ...features.inspirerRoutes,
        ...features.defendreRoutes,
        ...features.apprendreRoutes,
        ...features.engagerRoutes,
      ],
    },
    { path: "*", element: <features.NotFoundPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default routes;
