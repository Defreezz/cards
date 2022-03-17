import React, {useState} from "react";
import {registrationThunk} from "../../../store/reducers/registrationReducer";
import {useDispatch} from "react-redux";

export const Registration = () => {

  const dispatch = useDispatch()



  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword, setConfirmPassword]  = useState("")


  const onSubmitRegistr = () => {
    if (password === confirmPassword) {
      dispatch(registrationThunk(email,password))
    }
  }


  return <div>

    <div style={{display: 'flex',flexDirection: 'column', width: '400px', margin: '0 auto'}}>
      <h1>Registration</h1>
      <input type="text" placeholder='E-mail' onChange={e => setEmail(e.currentTarget.value)}/>
      <input type="password" placeholder='Password' onChange={e => setPassword(e.currentTarget.value)}/>
      <input type="password" placeholder='ConfirmPassword' onChange={e => setConfirmPassword(e.currentTarget.value)}/>
      <button onClick={onSubmitRegistr}>Registration</button>
    </div>
  </div>;
};
