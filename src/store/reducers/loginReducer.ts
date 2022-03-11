import {Dispatch} from "redux";
import { userAPI } from "../../main/api/api";
import {setUserData} from "../actions/profileReducerActions";
import {setIsLoggedIn} from "../actions/appReducerActions";
import {ThunkType} from "../store";

type InitStateType = typeof initState;
type AllActionsType = ReturnType<typeof getLoginAC>

const initState = {
    email: '',
    name: '',
    isLogin: false
};

export const loginReducer = (state = initState, action: AllActionsType): InitStateType => {
    switch (action.type) {
        case "GET_LOGIN":
            return {
                ...state,
                email: action.email,
                name: action.name,
                isLogin: true,
            }
        default:
            return state;
    }
};

export const getLoginAC = (email: string, name: string) => {
    return {
        type: "GET_LOGIN",
        email,
        name,
    } as const
}

export const getLoginUserData = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {

    userAPI.logIn(email, password, rememberMe)
        .then(data => {
            dispatch(getLoginAC(data.email, data.name))

            dispatch(setUserData(data))
            dispatch(setIsLoggedIn(true))
        })
        .catch(err => {
            const error = err.response ? err.response.data.error : (err.message + ', more details in the console');
            console.log('Error: ', error)
        })
}

export const forgotPassword = (email: string): ThunkType => async dispatch => {
    try {
        await userAPI.forgotPassword(email)
    } catch (error) {

    }
}
export const sendNewPassword = (password: string, token: string): ThunkType => async dispatch => {
    try {
        await userAPI.newPassword(password, token)
    } catch (error) {

    }
}

