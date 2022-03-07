import {AppStoreType} from "../store";

export const SelectErrorMessage = (state:AppStoreType):string|null => state.app.errorMessage