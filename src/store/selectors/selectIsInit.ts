import {AppStoreType} from "../store";

export const selectIsInit = (state:AppStoreType):boolean => state.app.isInitialized