import {Provider} from "react-redux";
import {StatusBar} from 'expo-status-bar';

import StackNavigator from "./app/navigation/StackNavigator";
import store from './app/redux/Store'

export default function App() {
   return(
    <Provider store={store}>
        <StackNavigator />
        <StatusBar style="auto" />
    </Provider>
   ); 
}