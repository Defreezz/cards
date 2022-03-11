import {AppStoreType} from "../store";
import {ProfileReducerType} from "../reducers/profileReducer";

export const selectProfileData = (state:AppStoreType):ProfileReducerType => state.profile