type InitStateType = typeof initState;

const initState = {};

export const createPasswordReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        default:
            return state;
    }
};
