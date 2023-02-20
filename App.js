import {Provider} from "react-redux";

import StackNavigator from "./app/navigation/StackNavigator";
import store from './app/redux/Store'

export default function App() {
    return (
        <Provider store={store}>
            <StackNavigator />
        </Provider>
    );
}