import {AppStoreType} from "../store";

export const selectAvatar = (state:AppStoreType):string|undefined => state.profile.avatar