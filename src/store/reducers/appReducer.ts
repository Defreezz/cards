import {APP_ACTIONS, AppReducerActionsType, setInitialization} from "../actions/appReducerActions";
import {ThunkType} from "../store";
import {authAPI} from "../../api/api";
import {setUserData} from "../actions/profileReducerActions";

export type PendingStatusType = "idle" | "failed" | "completed" | "loading";
type InitStateTypes = {
    isLoggedIn: boolean;
    isInitialized: boolean;
    errorMessage: string | null;
    status: PendingStatusType;
};
const initState: InitStateTypes = {
    isLoggedIn: false,
    isInitialized: false,
    errorMessage: null,
    status: "idle",
};

export const appReducer = (state: InitStateTypes = initState, action: AppReducerActionsType): InitStateTypes => {

    switch (action.type) {
        case APP_ACTIONS.SET_INITIALIZATION:
        case APP_ACTIONS.CHANGE_OPERATION_STATUS:
            return { ...state, ...action.payload}
        default:
            return state;
    }
};


export const initializeApp = (): ThunkType => async dispatch => {
    try {
        const response = await authAPI.me()
        dispatch(setUserData(response.data))
        dispatch(setInitialization(true))
    } catch (e: any) {

    }
}