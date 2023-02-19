import {SET_HAS_COMPLETED_INITIAL_SCREENS} from "./types";

export const showInitialScreen = () => {
    return{
        type: SET_HAS_COMPLETED_INITIAL_SCREENS
    }
}