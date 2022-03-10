import axios from "axios";
import {ProfileResponseType} from "./types";
import {forgotPasswordMessage} from "../constants/forgotPasswordMessage";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://neko-back.herokuapp.com/2.0" //process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
})

export const usersAPI = {
    me() {
        return instance.post<ProfileResponseType>(`/auth/me`, {})

    },
    updateProfile(profile: Partial<ProfileResponseType>) {
        return instance.put<{ updatedUser: { name: string, avatar: string } }>(`/auth/me`, profile)

    },
    logIn(email: string, password: string, rememberMe: boolean) {
        return instance.post<ProfileResponseType>('auth/login', {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<{ info: string, error: string; }>(`/auth/me/`, {})
    },
    forgotPassword(email: string) {
        return instance.post(`/auth/forgot/`, {
            email,
            from: "test-front-admin <yatsevich-artsiom@yandex.by>",
            message: forgotPasswordMessage,
        })
    },
    newPassword(password:string,resetPasswordToken:string){
        return instance.post(`/auth/set-new-password/`,{password,resetPasswordToken})
    }
}