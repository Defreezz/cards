type InitStateType = typeof initState;
type AllActionsType = ReturnType<typeof getLoginAC>

const initState = {
    email: '',
    name: '',
};

export const loginReducer = (state = initState, action: AllActionsType): InitStateType => {
    switch (action.type) {
        case "GET_LOGIN":
            return {
                ...state,
                email: action.email,
                name: action.name
            }
        default:
            return state;
    }
};

export const getLoginAC = (email: string, name: string) => {
    return {
        type: "GET_LOGIN",
        email,
        name,
    } as const
}
