import {AppStoreType} from "../store";
import {PendingStatusType} from "../reducers/appReducer";

export const selectStatus = (state:AppStoreType):PendingStatusType => state.app.status