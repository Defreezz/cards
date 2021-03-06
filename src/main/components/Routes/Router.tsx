import React from "react";
import {Route, Routes} from "react-router-dom";
import {Error404} from "../common/Error404/Error404";
import {Registration} from "../Registration/Registration";
import {Profile} from "../Profile/Profile";
import {ResetPassword} from "../ResetPassword/ResetPassword";
import {CreateNewPassword} from "../CreateNewPassword/CreateNewPassword";
import {LogIn} from "../LogIn/LogIn";
import {PacksList} from "../PacksList/PacksList";
import {CardsList} from "../CardsList/CardsList";
import {LearnPage} from "../CardsList/LearnPage/LearnPage";

export enum Path {
  LogIn = "/login",
  Registration = "/registration",
  Profile = "/profile",
  PacksList = "/packs-list",
  CardsList = "/cards-list/:cardsPack_id/*",
  ResetPassword = "/reset-password",
  CreatePassword = "/create-new-password",
  Learn = "/learn/:cardsPack_id/*",
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
        <Route path={Path.Learn} element={<LearnPage />} />
        <Route path={Path.PacksList} element={<PacksList />} />
        <Route path={Path.CardsList} element={<CardsList />} />
        <Route path={Path.ResetPassword} element={<ResetPassword />} />
        <Route path={Path.CreatePassword} element={<CreateNewPassword />}
        />
        <Route path={Path.Error404} element={ <Error404 />} />
      </Routes>
    </div>
  );
};
