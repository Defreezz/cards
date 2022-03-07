import {AppStoreType} from "../store";

export const selectErrorMessage = (state:AppStoreType):string|null => state.app.errorMessage