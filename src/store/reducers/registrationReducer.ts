import {Dispatch} from "redux";
import {registrationAPI} from "../../main/api/api";

export type RegistrationStateType = {}

const initState:RegistrationStateType = {};

export const registrationReducer = (state = initState,action: RegistrationActionType): RegistrationStateType => {
    switch (action.type) {
        case "REG-FORM":
            return {...state}
        default:
            return state;
    }
};



export type RegistrationActionType = ReturnType<typeof registrationAC>

export const registrationAC = () => {
    return {
        type: 'REG-FORM'
    } as const
}


export const registrationThunk = (email: string, password:string) => (dispatch: Dispatch) => {
    registrationAPI.registration(email,password)
        .then(() => {
            dispatch(registrationAC())
        })
}