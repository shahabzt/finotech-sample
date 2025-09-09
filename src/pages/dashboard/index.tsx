import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { RouteEnums } from "../../enums/routeEnums";
import { addLog } from "../../store/logsReducer";
import { ActionEnums } from "../../enums/actionEnums";

const DashboardContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { remove: removeToken } = useLocalStorage("token");

  const handleOnLogout = () => {
    removeToken();
    navigate(RouteEnums.LOGIN);
    dispatch(addLog(ActionEnums.LOGOUT));
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
      <Typography variant="h2">به پنل کاربری خوش آمدید</Typography>
      <Typography variant="body1">
        این پنل برای مدیریت کاربران و عملیات های کاربری است
      </Typography>
      <Button
        variant="contained"
        onClick={handleOnLogout}
        sx={{ width: "50%" }}
      >
        خروج از پنل کاربری{" "}
      </Button>
    </Box>
  );
};

export default DashboardContainer;
