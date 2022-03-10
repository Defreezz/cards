import React, {useState} from "react";
import {getLoginUserData} from "../../../store/reducers/loginReducer";
import {useDispatch} from "react-redux";
import style from "./LogIn.module.css"
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";

export const LogIn = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const onClickButtonLogin = () => {
        dispatch(getLoginUserData(email, password, checked))
        setEmail('')
        setPassword('')
        setChecked(false)
    }


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
        </div>
    );
};
