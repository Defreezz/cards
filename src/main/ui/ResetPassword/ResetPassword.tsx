import React, {useCallback, useState} from "react";
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import style from "./resetPassword.module.scss"
import {useTypedDispatch} from "../../utils";
import {forgotPassword} from "../../../store/reducers/loginReducer";


export const ResetPassword = () => {

    const [email, setEmail] = useState<string>('')
    const dispatch = useTypedDispatch()

    const handleButtonClick = useCallback(() => {
        dispatch(forgotPassword(email))
    },[dispatch,email])

    return (
        <div className={style.container}>
            <SuperInputText
                value={email}
                placeholder={"email"}
                onChangeText={setEmail}
            />
            <SuperButton
                disabled={email === ''}
                onClick={handleButtonClick}
            >
                Send instructions
            </SuperButton>
        </div>
    );
};
