import { useSelector } from "react-redux";
import { useMemo } from "react";

import { logState } from "../store/logsReducer";

export const usePaginatedLogs = (page: number, pageSize: number = 10) => {
  const { logs } = useSelector(logState);

  return useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    const paginatedData = logs.slice(start, end);
    const totalPages = Math.ceil(logs.length / pageSize);

    return {
      data: paginatedData,
      totalPages,
      currentPage: page,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    };
  }, [logs, page, pageSize]);
};
