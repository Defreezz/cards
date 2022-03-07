import {AppStoreType} from "../store";

export const selectEmail = (state:AppStoreType):string => state.profile.email