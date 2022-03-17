import {AppStoreType} from "../store";

export const selectSearchPackName = (state:AppStoreType):string => state.packs.packName