import { UrlApi } from "../constants/UrlApi";
import { Api } from "../service/api";
import { GitHubRepositorySearchResponse } from "../interfaces/repositories";

/**
 * Función que consulta repositorios de GitHub por su nombre.
 * @param {string} username - Nombre de repositorio a buscar.
 * @param {number} page - Número de página a consultar.
 * @returns {Array<Object>} Retorna repositorios de GitHub por nombre.
 */

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
