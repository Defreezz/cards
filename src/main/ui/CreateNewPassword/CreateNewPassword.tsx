import React, {useCallback, useState} from "react";
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import style from "./createNewPassword.module.scss"
import {useParams} from "react-router-dom";
import {useTypedDispatch} from "../../utils";
import {sendNewPassword} from "../../../store/reducers/loginReducer";

export const CreateNewPassword = () => {

    const [newPassword, setNewPassword] = useState<string>('')
    const dispatch = useTypedDispatch()
    const {token} = useParams<"token">()

    const handleSendNewPassword = useCallback(() => {
        dispatch(sendNewPassword(newPassword, token!))
    }, [dispatch])

    return (
        <div>
            Create new password
            <div className={style.container}>
                <SuperInputText
                    placeholder={'new password'}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
                <SuperButton
                    onClick={handleSendNewPassword}
                >
                    Create new password
                </SuperButton>
            </div>
        </div>
    )
};
