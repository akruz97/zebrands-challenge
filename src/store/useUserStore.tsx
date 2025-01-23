import { create } from "zustand";
// import { authCheckStatus, authLogin, authLoginGoogle } from "../actions/authActions";
import { GitHubUser } from "../interfaces/users";
import { getUsersByUsername, getUsersByUsernameNextPage } from "../actions/userActions";


export interface UserState {
    users: GitHubUser[],
    nextPage: string | null,
    currentPage: string | null,
    loading: boolean,
    loadingMore: boolean,
    searchUsers: (username: string) => Promise<void>;
    searchUsersNextPage: (nexPageUrl: string) => Promise<void>;
    resetFlags: () => void;
    getUserInfo: (username: string) => Promise<void>;
}


export const useUserStore = create<UserState>()((set, get) => ({

    users: [],
    loading: false,
    nextPage: null,
    currentPage: null,
    loadingMore: false,
    resetFlags: () => {
        set({
            users: [], 
            nextPage: null, 
            loading: false, 
            currentPage: null 
           });
    },
    searchUsers: async (username: string) => {
        set({ loading: true })

        if(!username.length){
            get().resetFlags();
            return;
        }
        
        const usersResponse = await getUsersByUsername(username);
        if(usersResponse?.data.length){
            set({ 
                users: usersResponse.data, 
                nextPage: usersResponse.link, 
                currentPage: usersResponse.currentLink, 
                loading: false 
            });
            return;
        }
        get().resetFlags()
    },
    searchUsersNextPage: async (nexPageUrl: string) => {

        set({ loadingMore: true });

        if(!nexPageUrl){
            set({ 
                nextPage: null, 
                loadingMore: false,
                currentPage: null 
            });
            return;
        }
        
        const newUsersResponse = await getUsersByUsernameNextPage(nexPageUrl);

        if(newUsersResponse?.data.length){

            let [firstUser] = newUsersResponse.data || [];

            if(get().users.findIndex(user => user.id === firstUser.id) != -1) {
                set({ loadingMore: false });
                return;
            }

            set({ 
                users: [...get().users, ...newUsersResponse.data], 
                nextPage: newUsersResponse.link, 
                loadingMore: false,
                currentPage: newUsersResponse.currentLink  
            })
            return;
        }
        set({  nextPage: null, loadingMore: false, currentPage: null })
    },
    getUserInfo: async (username: string) => {

    }

}))