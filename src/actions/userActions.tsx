import { UrlApi } from "../constants/UrlApi";
import { IResponseUsers } from "../interfaces/users";
import { Api } from "../service/api";

export const getUsersByUsername = async (username: string, page: number) => {
  const { data } = await Api.get<IResponseUsers>(`${UrlApi.users}`, {
    params: {
      q: username,
      page: page,
    },
  });

  return { data: data.items };
};
