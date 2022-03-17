import React from "react";
import {Route, Routes} from "react-router-dom";
import {Registration} from "../Registration/Registration";
import {ResetPassword} from "../ResetPassword/ResetPassword";
import {CreateNewPassword} from "../CreateNewPassword/CreateNewPassword";
import {LogIn} from "../LogIn/LogIn";

export enum Path {
    LogIn = "/login",
    Registration = "/registration",
    ResetPassword = "/resetPassword",
    CreatePassword = "/createNewPassword/:token/*",

}

export const RouterWithoutLogin = () => {
    return (
        <div>
            <Routes>
                <Route path={"/*"} element={<LogIn />} />
                <Route path={Path.LogIn} element={ <LogIn />} />
                <Route path={Path.Registration} element={<Registration />} />
                <Route path={Path.ResetPassword} element={<ResetPassword />} />
                <Route path={Path.CreatePassword} element={<CreateNewPassword />}
                />
            </Routes>
        </div>
    );
};
