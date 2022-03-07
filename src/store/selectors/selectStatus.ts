import {AppStoreType} from "../store";
import {PendingStatusType} from "../reducers/appReducer";

export const SelectStatus = (state:AppStoreType):PendingStatusType => state.app.status