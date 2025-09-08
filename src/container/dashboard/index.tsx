import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { RouteEnums } from "../../enums/routeEnums";

const DashboardContainer = () => {
  const navigate = useNavigate();
  const { remove } = useLocalStorage("token");
  
  const handleOnLogout = () => {
    remove();
    navigate(RouteEnums.LOGIN);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
      <Typography variant="h2">به پنل کاربری خوش آمدید</Typography>
      <Typography variant="body1">
        این پنل برای مدیریت کاربران و عملیات های کاربری است
      </Typography>
      <Button variant="contained" onClick={handleOnLogout} sx={{width:"50%"}}>
        خروج از پنل کاربری{" "}
      </Button>
    </Box>
  );
};

export default DashboardContainer;
