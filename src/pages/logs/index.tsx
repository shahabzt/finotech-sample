import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { usePaginatedLogs } from "../../hooks/usePaginateLogs";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { clearLogs } from "../../store/logsReducer";
import { useSearchParams } from "react-router-dom";

const LogsContainer = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const pageRef = useRef<number>(
    queryParams.get("page") ? Number(queryParams.get("page")) : 1
  );
  const dispatch = useDispatch();
  const { data, totalPages } = usePaginatedLogs(pageRef.current);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    pageRef.current = value;
    setQueryParams({ page: value.toString() });
  };
  const handleDeleteLogs = () => {
    dispatch(clearLogs());
  };
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        لیست لاگ‌ها
      </Typography>

      <List>
        {data.map((log) => (
          <ListItem key={log.id} divider>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  {log.action}
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {new Date(log.date).toLocaleString("fa-IR")}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={totalPages}
          page={pageRef.current}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        />
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" color="error" onClick={handleDeleteLogs}>
          پاک کردن تمامی لاگ ها{" "}
        </Button>
      </Box>
    </Paper>
  );
};

export default LogsContainer;
