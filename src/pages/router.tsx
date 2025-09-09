import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/mainLayout";
import { RouteEnums } from "../enums/routeEnums";
import AuthWrapper from "./authWrapper";
import LoginContainer from "./login";
import DashboardContainer from "./dashboard";
import UsersContainer from "./users";
import UsersDetails from "./userDetails";
import LogsContainer from "./logs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to={RouteEnums.DASHBOARD} replace />,
          },
          {
            path: RouteEnums.DASHBOARD,
            element: <DashboardContainer />,
          },
          {
            path: RouteEnums.LOGS,
            element: <LogsContainer />,
          },
          {
            path: RouteEnums.USER_PAGE,
            element: <UsersContainer />,
          },
          {
            path: `${RouteEnums.USER_PAGE}/:id`,
            element: <UsersDetails />,
          },
        ],
      },
    ],
  },
  {
    path: RouteEnums.LOGIN,
    element: <LoginContainer />,
  },
]);

export default Router;
