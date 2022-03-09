import {AppStoreType} from "../store";
import {PendingStatusType} from "../reducers/appReducer";

export const selectOperationStatus = (state:AppStoreType):PendingStatusType => state.app.status