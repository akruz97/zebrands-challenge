import { UrlApi } from "../constants/UrlApi";
import { IResponseUsers } from "../interfaces/users";
import { Api } from "../service/api";

/**
 * Función que consulta usuarios de GitHub por su nombre de usuario.
 * @param {string} username - Nombre de usuario a buscar.
 * @param {number} page - Número de página a consultar.
 * @returns {Array<Object>} Retorna usuarios de GitHub por nombre de usuario.
 */

export const getUsersByUsername = async (username: string, page: number) => {
  const { data } = await Api.get<IResponseUsers>(`${UrlApi.users}`, {
    params: {
      q: username,
      page: page,
    },
  });

  return { data: data.items };
};
