import React, {useState} from "react";
import {getLoginUserData} from "../../../store/reducers/loginReducer";
import {useDispatch, useSelector} from "react-redux";
import style from "./LogIn.module.css"
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import {AppStoreType} from "../../../store/store";
import { Navigate } from "react-router-dom";
import { Path } from "../Routes/Router";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {Path} from "../Routes/Router";

export const LogIn = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)
    const isLogin = useSelector<AppStoreType, boolean>((state => state.logIn.isLogin))
    const onClickButtonLogin = () => {
        dispatch(getLoginUserData(email, password, checked))
        setEmail('')
        setPassword('')
        setChecked(false)
    }

    if (isLogin) return <Navigate to={Path.Profile}/>

    return (
        <div>
            <div>
                Sign in
            </div>
            <div>
                Email
            </div>
            <div>
                <SuperInputText
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                Password
            </div>
            <div>
                <SuperInputText
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <SuperCheckbox checked={checked} onChange={() => setChecked(!checked)}/>
                <span>Remember me</span>
            </div>
            <div>
                <SuperButton onClick={onClickButtonLogin}>Login</SuperButton>
            </div>
            <div>
                <NavLink
                    style={{
                        textDecoration: "none",
                        color: "#d39191"
                    }}
                    to={Path.ResetPassword}
                >
                    Forgot password?
                </NavLink>
            </div>
            <div>
                <NavLink
                    style={{
                        textDecoration: "none",
                        color: "#d39191"
                    }}
                    to={Path.Registration}
                >
                    Registration
                </NavLink>
            </div>
        </div>
    );
};