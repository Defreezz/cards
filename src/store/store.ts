import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {registrationReducer} from "./reducers/registrationReducer";
import {profileReducer} from "./reducers/profileReducer";
import {appReducer} from "./reducers/appReducer";
import {packsReducer} from "./reducers/packsReducer";
import {cardsReducer} from "./reducers/cardsReducer";
import {ProfileReducersActionsType} from "./actions/profileReducerActions";
import {PacksReducerActionsType} from "./actions/packsReducerActions";
import {CardsReducerActionsType} from "./actions/cardsReducerActions";
import {AppReducerActionsType} from "./actions/appReducerActions";
import thunk, {ThunkAction} from "redux-thunk";

export type AppStoreType = ReturnType<typeof rootReducers>;

export type AllActionsType =
    | ProfileReducersActionsType
    | AppReducerActionsType
    | PacksReducerActionsType
    | CardsReducerActionsType


export type ThunkType = ThunkAction<void, AppStoreType, unknown, AllActionsType>

const rootReducers = combineReducers({
    app: appReducer,
    logIn: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    packs: packsReducer,
    cards:cardsReducer,
});
export const store = createStore(rootReducers, applyMiddleware(thunk));

//@ts-ignore
window.store = store

