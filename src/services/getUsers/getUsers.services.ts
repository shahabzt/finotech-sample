import { UsersDataModel } from "../../models/users.model";
import API, { handleServiceError } from "../apiClient";

export const getUsers = async (): Promise<UsersDataModel[]> => {
  try {
    const response = await API.get<UsersDataModel[]>("/users");
    return response.data;
  } catch (error) {
    handleServiceError(error);
    throw error;
  }
};
