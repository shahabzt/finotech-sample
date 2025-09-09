import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface Log {
  id: number;
  date: string;
  action: string;
}

interface LogsState {
  logs: Log[];
}

const initialState: LogsState = {
  logs: [],
};

const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<string>) => {
      const lastId =
        state.logs.length > 0 ? state.logs[state.logs.length - 1].id : 0;

      state.logs.push({
        id: lastId + 1,
        date: new Date().toISOString(),
        action: action.payload,
      });
    },
    clearLogs: (state) => {
      state.logs = [];
    },
  },
});

export const { addLog, clearLogs } = logsSlice.actions;
export const logState = (state: RootState) => state.logsReducer;
export default logsSlice.reducer;
