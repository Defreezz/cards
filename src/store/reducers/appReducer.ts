import {
    APP_ACTIONS,
    AppReducerActionsType,
    setErrorMessage,
    setInitialization,
    setIsLoggedIn
} from "../actions/appReducerActions";
import {ThunkType} from "../store";
import {profileAPI} from "../../api/api";
import {setUserData} from "../actions/profileReducerActions";

export type PendingStatusType = 'idle' | 'failed' | 'completed' | 'loading';
type InitStateTypes = {
    isLoggedIn: boolean
    isInitialized: boolean
    errorMessage: string | null
    status: PendingStatusType
};
const initState: InitStateTypes = {
    isLoggedIn: false,
    isInitialized: false,
    errorMessage: null,
    status: 'idle',
};

export const appReducer = (state: InitStateTypes = initState, action: AppReducerActionsType): InitStateTypes => {

    switch (action.type) {
        case APP_ACTIONS.SET_INITIALIZATION:
        case APP_ACTIONS.CHANGE_OPERATION_STATUS:
        case APP_ACTIONS.SET_IS_LOGGED_IN:
        case APP_ACTIONS.SET_ERROR_MESSAGE:
            return {...state, ...action.payload}
        default:
            return state;
    }
};


export const initializeApp = (): ThunkType => async dispatch => {
    try {
        const response = await profileAPI.me()
        dispatch(setUserData(response.data))
        dispatch(setIsLoggedIn(true))
    } catch (e: any) {
        dispatch(setIsLoggedIn(false))
    }finally {
        dispatch(setInitialization(true))
    }
}

export const logout = (): ThunkType => async dispatch => {
    try {
        await profileAPI.logout()
        dispatch(setIsLoggedIn(false))
    } catch (e: any) {
        dispatch(setErrorMessage(e))
    }
}