import React, {useEffect, useState} from "react";
import {getLoginUserData} from "../../../store/reducers/loginReducer";
import {useDispatch, useSelector} from "react-redux";
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import {NavLink} from "react-router-dom";
import {Path} from "../Routes/Router";
import style from "./LogIn.module.css"
import {selectErrorMessage, selectOperationStatus} from "../../../store/selectors";
import {Preloader} from "../common/Preloader/Preloader";
import {setErrorMessage} from "../../../store/actions/appReducerActions";

export const LogIn = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)

    const operationStatus = useSelector(selectOperationStatus)
    const error = useSelector(selectErrorMessage)

    const onClickButtonLogin = () => {
        dispatch(getLoginUserData(email, password, checked))
        setEmail('')
        setPassword('')
        setChecked(false)
    }

    const onFocusEmailAndPasswordInput = () => {
        dispatch(setErrorMessage(""))
    }

    useEffect(() => {
        dispatch(setErrorMessage(""))
    }, [])


    if (operationStatus === 'loading') {
        return <div className={style.preloader}><Preloader width={"40px"} height={"40px"}/></div>
    }

    return (
        <div className={style.login}>
            <div>
                Sign in
            </div>
            {error && <div className={style.error}>{error}</div>}
            <div>
                Email
            </div>
            <div>
                <SuperInputText
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={onFocusEmailAndPasswordInput}
                />
            </div>
            <div>
                Password
            </div>
            <div>
                <SuperInputText
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={onFocusEmailAndPasswordInput}
                />
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
