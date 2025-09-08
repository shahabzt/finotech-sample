import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";

import {
  UserMenuItems,
  UserMenuItemsProps,
} from "../../../utils/UserMenuItems";
import { RouteEnums } from "../../../enums/routeEnums";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

import classes from "./SideBarMenu.module.css";

const SidebarMenu: FC = () => {
  const navigate = useNavigate();
  const { remove } = useLocalStorage("token");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleOnMenuItems = (index: number, item: UserMenuItemsProps) => {
    if (item.pathname === RouteEnums.LOGOUT) {
      remove();
      navigate(RouteEnums.LOGIN);
      return;
    }
    navigate(`${item.pathname}`);
    setActiveIndex(index);
    sessionStorage.setItem("lastIndex", `${index}`);
  };

  return (
    <div className={classes.container}>
      <List disablePadding className={classes.userMenuContainer}>
        {UserMenuItems.map((item, index) => (
          <ListItem
            style={{ marginBottom: "8px" }}
            key={item.id}
            disablePadding
            onClick={() => {
              handleOnMenuItems(index, item);
            }}
          >
            <ListItemButton disableGutters selected={activeIndex === index}>
              <Typography variant="body2" fontWeight={400}>
                {item.title}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SidebarMenu;
