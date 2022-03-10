import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error404 } from "../Error404/Error404";
import { Registration } from "../Registration/Registration";
import { Profile } from "../Profile/Profile";
import { ResetPassword } from "../ResetPassword/ResetPassword";
import { CreateNewPassword } from "../CreateNewPassword/CreateNewPassword";
import { SuperComponents } from "../SuperComponents/SuperComponents";
import { LogIn } from "../LogIn/LogIn";

export enum Path {
  LogIn = "/login",
  Registration = "/registration",
  Profile = "/profile",
  ResetPassword = "/resetPassword",
  CreatePassword = "/createNewPassword",
  SuperComponents = "/superComponents",
  Error404 = "/*",
}

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Profile />} />
        <Route path={Path.LogIn} element={ <LogIn />} />
        <Route path={Path.Registration} element={<Registration />} />
        <Route path={Path.Profile} element={<Profile />} />
        <Route path={Path.ResetPassword} element={<ResetPassword />} />
        <Route path={Path.CreatePassword} element={<CreateNewPassword />}
        />
        <Route path={Path.SuperComponents} element={ <SuperComponents />} />
        <Route path={Path.Error404} element={ <Error404 />} />
      </Routes>
    </div>
  );
};
