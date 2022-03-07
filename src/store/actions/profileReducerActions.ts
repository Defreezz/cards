import {ProfileReducerType} from "../reducers/profileReducer";

export enum PROFILE_ACTIONS {
    UPDATE_PROFILE = 'profile/UPDATE-PROFILE',
    SET_USER_DATA = 'profile/SET-USER-DATA',

}
export type ProfileReducersActionsType =
    | UpdateProfile
    | SetUserData

type SetUserData = {
    type: PROFILE_ACTIONS.SET_USER_DATA
    payload:ProfileReducerType
}
type UpdateProfile = {
    type: PROFILE_ACTIONS.UPDATE_PROFILE
    payload:ProfileReducerType
}
export const setUserData = (profile:ProfileReducerType):SetUserData =>
    ({type:PROFILE_ACTIONS.SET_USER_DATA,payload:{...profile}})

export const modifyProfile = (changes: ProfileReducerType):UpdateProfile =>
    ({type: PROFILE_ACTIONS.UPDATE_PROFILE,payload: {...changes}})