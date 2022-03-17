
import {modifyProfile, PROFILE_ACTIONS, ProfileReducersActionsType} from "../actions/profileReducerActions";
import {ThunkType} from "../store";
import {ProfileResponseType} from "../../main/api/types";
import {setErrorMessage, setIsLoggedIn, setOperationStatus} from "../actions/appReducerActions";
import {userAPI} from "../../main/api/api";

export type ProfileReducerType = ProfileResponseType // на тот случай, если в стейте будут лежать свойства отличные от бэка
const initState: ProfileReducerType = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,
    created: new Date(),
    updated: new Date(),
    isAdmin: false,
    verified: false,
    rememberMe: false,
    error: '',
}

export const profileReducer = (state: ProfileReducerType = initState, action: ProfileReducersActionsType): ProfileReducerType => {

    switch (action.type) {
        case PROFILE_ACTIONS.SET_USER_DATA:
        case PROFILE_ACTIONS.UPDATE_PROFILE:
            return {...state, ...action.payload}
        default:
            return state;
    }
};

export const updateProfile = (changes: Pick<ProfileResponseType, "name" | "avatar">): ThunkType =>
    async dispatch => {
        try {
            dispatch(setOperationStatus("loading"))
            const response = await userAPI.updateProfile(changes)
            dispatch(modifyProfile(response.data.updatedUser))
        }
        catch (error){

        }
        finally {
            dispatch(setOperationStatus("completed"))
        }
    }

export const logout = (): ThunkType => async dispatch => {
    try {
        await userAPI.logout()
        dispatch(setIsLoggedIn(false))
    } catch (e: any) {
        dispatch(setErrorMessage(e))
    }
}

