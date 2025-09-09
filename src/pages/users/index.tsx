import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useGetUsers } from "../../queries/getUsers.query";
import { UsersDataModel } from "../../models/users.model";
import { addLog } from "../../store/logsReducer";
import { ActionEnums } from "../../enums/actionEnums";

const UsersContainer = () => {
  const navigate = useNavigate();
  const { data } = useGetUsers();
  const dispatch = useDispatch();

  const handleAction = (user: UsersDataModel) => {
    dispatch(addLog(`${ActionEnums.SEEDETAILS} ${user.id}`));
    navigate(`${user.id}`, { state: { user } });
  };

  if (!data) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <CircularProgress size={"60px"} />
      </Box>
    );
  }
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>نام</TableCell>
            <TableCell>نام کاربری</TableCell>
            <TableCell>ایمیل</TableCell>
            <TableCell>عملیات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleAction(user)}
                >
                  مشاهده
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersContainer;
