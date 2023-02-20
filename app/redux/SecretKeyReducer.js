// Define a reducer to manage the state
const secretKeyReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_SECRET_KEY':
            return action.secretKey;
        default:
            return state;
    }
};

export default secretKeyReducer;