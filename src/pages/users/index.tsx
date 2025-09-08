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
import { useGetUsers } from "../../queries/getUsers.query";
import { UsersDataModel } from "../../models/users.model";
import { useNavigate } from "react-router-dom";

const UsersContainer = () => {
  const navigate = useNavigate();
  const { data } = useGetUsers();

  const handleAction = (user: UsersDataModel) => {
    navigate(`${user.id}`, {state:{user}});
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
