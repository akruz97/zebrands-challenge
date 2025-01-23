import axios from "axios";
import { patternLink } from "../constants/Patterns";
import { UrlApi } from "../constants/UrlApi";
import { IResponseUsers, GitHubUser } from "../interfaces/users";
import { Api } from "../service/api";

export const getLinkParsed = (linkUrl: string) => {
    let parsedLink = null
    
    if(!linkUrl) return null;
  
    if(patternLink.test(linkUrl)){
        parsedLink = linkUrl.match(patternLink)?.[0];
    }
    return parsedLink;
}

export const getUsersByUsername = async (username: string, page: number) => {
        const { data } = await Api.get<IResponseUsers>(`${UrlApi.users}`, {
            params: {
                q: username,
                page: page
            }
        });

        return { data: data.items};
}

export const getUsersByUsernameNextPage = async (nextPage: string) => {
    try {

        const { data, headers } = await axios.get<IResponseUsers>(nextPage);

        const { link = null } = headers

        let parsedLink = getLinkParsed(link);

        return {
            data: data.items,
            link: parsedLink,
            currentLink: nextPage
        };
    } catch (error) {
        // errorHanlder(error.response.code, 'error');
        console.log(error);
        return null;
    }
}