import { create } from "zustand";
import { authCheckStatus, authLogin, authLoginGoogle } from "../actions/authActions";
import { IUser } from "../interfaces/users";
import { getUsersByUsername } from "../actions/userActions";


export interface UserState {
    users: IUser[],
    searchUsers: (username: string) => Promise<void>;
}


export const useUserStore = create<UserState>()((set, get) => ({

    users: [],
    searchUsers: async (username: string) => {
        const resp = await getUsersByUsername(username);
        if(resp){
            set({ users: resp })
        }
        set({ users: [] })
    }
}))