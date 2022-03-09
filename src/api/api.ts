import axios from "axios";
import {ProfileResponseType} from "./types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
})

export const authAPI = {
     me() {
        return  instance.post<ProfileResponseType>(`/auth/me`,{})

    },
     updateProfile (profile:Partial<ProfileResponseType>) {
         return  instance.put<{updatedUser:{name:string,avatar:string}}>(`/auth/me`,profile)

    },
}

