import {PendingStatusType} from "../reducers/appReducer";

export enum APP_ACTIONS {
    SET_IS_LOGGED_IN = 'Auth/SET-IS-LOGGED-IN',
    SET_ERROR_MESSAGE ='App/SET-ERROR-MESSAGE',
    CHANGE_OPERATION_STATUS ='App/CHANGE-OPERATION-STATUS',
    SET_INITIALIZATION = 'App/SET-INITIALIZATION',
}
export type AppReducerActionsType =
    | SetIsLoggedIn
    | SetErrorMessage
    | ChangeOperationStatus
    | SetInitialization

type SetIsLoggedIn = {
    type: APP_ACTIONS.SET_IS_LOGGED_IN
    payload:{isLoggedIn:boolean}
}
type SetErrorMessage = {
    type: APP_ACTIONS.SET_ERROR_MESSAGE
    payload:{errorMessage:string|null}
}
type ChangeOperationStatus = {
    type: APP_ACTIONS.CHANGE_OPERATION_STATUS
    payload:{status:PendingStatusType}
}
type SetInitialization = {
    type: APP_ACTIONS.SET_INITIALIZATION
    payload:{isInitialized:boolean}
}

export const setIsLoggedIn = (isLoggedIn: boolean):SetIsLoggedIn =>
    ({type:APP_ACTIONS.SET_IS_LOGGED_IN, payload:{isLoggedIn}});

export const setErrorMessage = (errorMessage: string | null):SetErrorMessage =>
    ({type: APP_ACTIONS.SET_ERROR_MESSAGE, payload:{errorMessage}});

export const changeOperationStatus = (status: PendingStatusType):ChangeOperationStatus =>
    ({type: APP_ACTIONS.CHANGE_OPERATION_STATUS, payload:{status}});

export const setInitialization = (isInitialized: boolean):SetInitialization =>
    ({type: APP_ACTIONS.SET_INITIALIZATION, payload:{isInitialized}});