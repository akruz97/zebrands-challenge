import { UrlApi } from "../constants/UrlApi";
import { Api } from "../service/api";
import { GitHubRepositorySearchResponse } from "../interfaces/repositories";

export const getRepositoriesByName = async (name: string, page: number) => {
  const { data } = await Api.get<GitHubRepositorySearchResponse>(
    `${UrlApi.repositories}`,
    {
      params: {
        q: name,
        page: page,
      },
    }
  );
  return { data: data.items };
};
