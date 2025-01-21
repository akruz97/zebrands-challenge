import { UrlApi } from "../constants/UrlApi";
import { IUser } from "../interfaces/users";
import { Api } from "../service/api";

export const getUsersByUsername = async (username: string) => {
    try {

        const { data } = await Api.get<IUser>(`${UrlApi.users}/${username}`);
        console.log(data);
        return [];
    } catch (error) {
        console.log(error);
        // errorHanlder(error.response.code, 'error');
        console.log(error);
        return null;
    }
}