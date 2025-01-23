import axios from "axios";
import { patternLink } from "../constants/Patterns";
import { UrlApi } from "../constants/UrlApi";
import { IResponseUsers, GitHubUser } from "../interfaces/users";
import { Api } from "../service/api";
import { getLinkParsed } from "./userActions";
import { GitHubRepositorySearchResponse } from "../interfaces/repositories";


export const getRepositoriesByName = async (name: string, page: number) => {

        const { data } = await Api.get<GitHubRepositorySearchResponse>(`${UrlApi.repositories}`, {
            params: {
                q: name,
                page: page
            }
        });
        return { data: data.items }
}

