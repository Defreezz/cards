import {AppStoreType} from "../store";

export const selectName = (state:AppStoreType):string => state.profile.name