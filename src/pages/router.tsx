import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/mainLayout";
import { RouteEnums } from "../enums/routeEnums";
import AuthWrapper from "./authWrapper";
import LoginContainer from "../container/login";

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
            element: <>sami</>, 
          },
          {
            path: RouteEnums.LOGS,
            // element: <LogsComponent />,
          },
          {
            path: RouteEnums.USER_PAGE,
            // element: <UserPageComponent />, 
          },
        ],
      },
    
    ],
    
  },
  {
    path: RouteEnums.LOGIN,
    element: <LoginContainer/>, 
  },
]);

export default Router;
