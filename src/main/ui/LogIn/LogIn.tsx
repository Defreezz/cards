import React, {useState} from "react";
import {getLoginUserData} from "../../../store/reducers/loginReducer";
import {useDispatch} from "react-redux";

export const LogIn = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)
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
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                Password
            </div>
            <div>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                <span>Remember me</span>
            </div>

            <div>
                <button onClick={onClickButtonLogin}>Login</button>
            </div>
        </div>
    );
};
