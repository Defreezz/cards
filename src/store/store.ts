import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./reducers/loginReducer";
import { registrationReducer } from "./reducers/registrationReducer";
import { profileReducer } from "./reducers/profileReducer";
import { resetPasswordReducer } from "./reducers/resetPasswordReducer";
import { createPasswordReducer } from "./reducers/createPasswordReducer";

export type AppStoreType = ReturnType<typeof rootReducers>;

const rootReducers = combineReducers({
  logIn: loginReducer,
  registration: registrationReducer,
  profile: profileReducer,
  resetPassword: resetPasswordReducer,
  createPassword: createPasswordReducer,
});
export const store = createStore(rootReducers, applyMiddleware(thunk));
