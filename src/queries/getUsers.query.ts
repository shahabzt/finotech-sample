import { useQuery } from "@tanstack/react-query";

import { handleServiceError } from "../services/apiClient";
import { getUsers } from "../services/getUsers/getUsers.services";
import { QueriesKey } from "../enums/queryKeys";

export const useGetUsers = () => {
  return useQuery({
    queryKey: [QueriesKey.GET_USERS],
    queryFn: async () => {
      try {
        const response = await getUsers();
        return response;
      } catch (error) {
        handleServiceError(error);
      }
    },
    refetchOnWindowFocus: false,
    
  });
};
