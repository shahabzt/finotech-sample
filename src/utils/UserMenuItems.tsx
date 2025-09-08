import { RouteEnums } from "../enums/routeEnums";
import { UserMenuItemsProps } from "../models/menuItems.model";



export const UserMenuItems: UserMenuItemsProps[] = [
  {
    title: " داشبورد",
    pathname: RouteEnums.DASHBOARD,
    id: 1,
  },

  {
    title: " صفحه کاربران   ",
    pathname: RouteEnums.USER_PAGE,
    id: 2,
  },
  {
    title: " عملیات های کاربر   ",
    pathname: RouteEnums.LOGS,
    id: 3,
  },
  {
    title: "خروج",
    pathname: RouteEnums.LOGOUT,
    id: 4,
  },
];
