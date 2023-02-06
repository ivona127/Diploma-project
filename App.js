import StackNavigator from "./app/navigation/StackNavigator";
import { Provider } from "react-redux";
import store from './app/redux/Store'
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <Provider store={store}>
      <StackNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
