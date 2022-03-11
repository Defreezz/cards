import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {loginReducer} from "./reducers/loginReducer";
import {registrationReducer} from "./reducers/registrationReducer";
import {profileReducer} from "./reducers/profileReducer";
import {ProfileReducersActionsType} from "./actions/profileReducerActions";
import {appReducer} from "./reducers/appReducer";
import {AppReducerActionsType} from "./actions/appReducerActions";

export type AppStoreType = ReturnType<typeof rootReducers>;

export type AllActionsType =
  | ProfileReducersActionsType
  | AppReducerActionsType


export type ThunkType = ThunkAction<void, AppStoreType, unknown, AllActionsType>

const rootReducers = combineReducers({
  app:appReducer,
  logIn: loginReducer,
  registration: registrationReducer,
  profile: profileReducer,
});
export const store = createStore(rootReducers, applyMiddleware(thunk));


