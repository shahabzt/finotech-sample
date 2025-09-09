import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { addLog } from "../../store/logsReducer";
import { UserMenuItems } from "../../utils/UserMenuItems";
import { RouteEnums } from "../../enums/routeEnums";
import { ActionEnums } from "../../enums/actionEnums";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { UserMenuItemsProps } from "../../models/menuItems.model";

import SideBarContainer from "../../styles/sideBarContainer";

const SidebarMenu: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { remove: removeToken } = useLocalStorage("token");
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const findActiveIndex = UserMenuItems.findIndex((item) =>
      pathname.includes(item.pathname)
    );
    if (findActiveIndex >= 0) {
      setActiveIndex(findActiveIndex);
    }
  }, [pathname]);

  const handleOnMenuItems = (index: number, item: UserMenuItemsProps) => {
    if (item.pathname === RouteEnums.LOGOUT) {
      removeToken();
      dispatch(addLog(ActionEnums.LOGOUT));
      navigate(RouteEnums.LOGIN);
      return;
    }
    dispatch(addLog(`${ActionEnums.RELOCATE} ${item.title}`));
    navigate(`${item.pathname}`);
    setActiveIndex(index);
  };

  return (
    <SideBarContainer>
      <List disablePadding sx={{ padding: "8px 24px 16px" }}>
        {UserMenuItems.map((item, index) => (
          <ListItem
            sx={{ marginBottom: "8px" }}
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
    </SideBarContainer>
  );
};

export default SidebarMenu;
