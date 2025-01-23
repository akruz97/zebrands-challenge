import { create } from "zustand";
// import { authCheckStatus, authLogin, authLoginGoogle } from "../actions/authActions";
import { GitHubUser } from "../interfaces/users";
import { getUsersByUsername, getUsersByUsernameNextPage } from "../actions/userActions";
import { GitHubRepository } from "../interfaces/repositories";
import { getRepositoriesByName } from "../actions/repositoryActions";


export interface RepositoryState {
    repositories: GitHubRepository[],
    nextPage: string | null,
    currentPage: string | null,
    loading: boolean,
    loadingMore: boolean,
    searchRepositories: (username: string, nextPage: string | null) => Promise<void>;
    // searchRepositoriesNextPage: (nexPageUrl: string) => Promise<void>;
    resetFlags: () => void;
}


export const useRepositoryStore = create<RepositoryState>()((set, get) => ({
    
    repositories: [],
    loading: false,
    nextPage: null,
    currentPage: null,
    loadingMore: false,
    resetFlags: () => {
        set({
            repositories: [], 
            nextPage: null, 
            loading: false, 
            currentPage: null 
           });
    },
    searchRepositories: async (name: string, nextPage: string | null = null) => {
        set({ loadingMore: true })

        // if(!name.length){
        //     get().resetFlags();
        //     return;
        // }
        
        const repoResponse = await getRepositoriesByName(name,nextPage);
        console.log(repoResponse)
        if(repoResponse?.data.length){
            set({ 
                repositories: [...get().repositories, ...repoResponse.data], 
                nextPage: repoResponse.link, 
                currentPage: repoResponse.currentLink, 
                loadingMore: false 
            });
            return;
        }
        get().resetFlags()
    },
    // searchRepositoriesNextPage: async (nexPageUrl: string) => {

    //     set({ loadingMore: true });

    //     if(!nexPageUrl){
    //         set({ 
    //             nextPage: null, 
    //             loadingMore: false,
    //             currentPage: null 
    //         });
    //         return;
    //     }
        
    //     const newRepoResponse = await getRepositoriesByNameNextPage(nexPageUrl);

    //     if(newRepoResponse?.data.length){

    //         let [firstRepo] = newRepoResponse.data || [];

    //         if(get().repositories.findIndex(repo => repo.id === firstRepo.id) != -1) {
    //             set({ loadingMore: false });
    //             return;
    //         }

    //         set({ 
    //             repositories: [...get().repositories, ...newRepoResponse.data], 
    //             nextPage: newRepoResponse.link, 
    //             loadingMore: false,
    //             currentPage: newRepoResponse.currentLink  
    //         })
    //         return;
    //     }
    //     set({  nextPage: null, loadingMore: false, currentPage: null })
    // }

}))