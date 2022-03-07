import {authAPI} from "../../api/api";
import {modifyProfile, PROFILE_ACTIONS, ProfileReducersActionsType} from "../actions/profileReducerActions";
import {ThunkType} from "../store";
import {ProfileResponseType} from "../../api/types";

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
    async (dispatch, getState) => {
        const userProfile = getState().profile
        try {
            const response = await authAPI.updateProfile({...userProfile, ...changes})
            dispatch(modifyProfile(response.data))
        }
        catch (error){

        }
    }



