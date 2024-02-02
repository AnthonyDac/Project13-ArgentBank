const initialState = {
    user: undefined,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                user: action.payload,
            };
        case "RESET_USER_DATA":
            return {
                ...state,
                user: undefined,
            };
        default:
            return state;
    }
};

export default userReducer;