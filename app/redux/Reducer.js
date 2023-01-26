import { SET_HAS_COMPLETED_INITIAL_SCREENS } from './Types';

const initialState = { 
    hasCompletedInitialScreens: false 
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_HAS_COMPLETED_INITIAL_SCREENS:
        return { 
            ...state, 
            hasCompletedInitialScreens: true 
        };
      default:
        return state;
    }
}

export default Reducer;