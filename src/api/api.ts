import axios from "axios";
import {ProfileResponseType} from "./types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
})

export const profileAPI = {
     me() {
        return  instance.post<ProfileResponseType>(`/auth/me`,{})

    },
     updateProfile (profile:Partial<ProfileResponseType>) {
         return  instance.put<{updatedUser:{name:string,avatar:string}}>(`/auth/me`,profile)

    },
    logout (){
         return instance.delete<{info: string,error: string;}>(`/auth/me/`,{})
    },
    login(){
         return instance.post(`/auth/login/`,{
             email:"yatsevich-artsiom@yandex.by",
             password:"13606744",
             rememberMe:true
         })
    }
}
