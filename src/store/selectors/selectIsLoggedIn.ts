import {AppStoreType} from "../store";

export const selectIsLoggedIn = (state:AppStoreType):boolean => state.app.isLoggedIn