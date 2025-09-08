import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";

import { UserMenuItems } from "../../utils/UserMenuItems";
import { RouteEnums } from "../../enums/routeEnums";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import SideBarContainer from "../../styles/sideBarContainer";
import { UserMenuItemsProps } from "../../models/userMenu.model";

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
