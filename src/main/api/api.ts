import axios from "axios";
import {
    CardsResponseType, NewCardType,
    NewPackType,
    PacksResponseType,
    ProfileResponseType,
    QueryCardsParamsType,
    QueryPackParamsType, UpdateCardType, UpdatePackType
} from "./types";
import {forgotPasswordMessage} from "../constants/forgotPasswordMessage";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://neko-back.herokuapp.com/2.0" //process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
})

export const userAPI = {
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
        return instance.delete<{ info: string, error: string; }>(`/auth/me`, {})
    },
    forgotPassword(email: string) {
        return instance.post<{ info: string, error: string; }>(`/auth/forgot`, {
            email,
            from: "test-front-admin <yatsevich-artsiom@yandex.by>",
            message: forgotPasswordMessage,
        })
    },
    newPassword(password: string, resetPasswordToken: string) {
        return instance.post<{ info: string, error: string; }>(
            `/auth/set-new-password`,
            {password, resetPasswordToken})
    },
}

export const registrationAPI = {
    registration(email: string, password: string) {
        return instance.post('/auth/register', {email, password})
    }
}

export const packAPI = {
    getPacks(queryParams?: Partial<QueryPackParamsType>) {
        return instance.get<PacksResponseType>(`/cards/pack`, {params: queryParams})
    },
    addPack(pack: NewPackType) {
        return instance.post<{}>(`/cards/pack`, {cardsPack: pack})
    },
    deletePack(id: string) {
        return instance.delete<{}>(`/cards/pack`, {params: {id}})
    },
    updatePack(update: UpdatePackType) {
        return instance.put<{}>(`/cards/pack`,update)
    },
}

export const cardsApi = {
    getCards(queryParams: Partial<QueryCardsParamsType>) {
        return instance.get<CardsResponseType>(`/cards/card`, {params: queryParams})
    },
    addCard(card: Partial<NewCardType>) {
        return instance.post<{}>(`/cards/card`, {card})
    },
    deleteCard(id: string) {
        return instance.delete<{}>(`/cards/card`, {params: {id}})
    },
    updatePack(update: UpdateCardType) {
        return instance.put<{}>(`/cards/card`,{update})
    },
}
