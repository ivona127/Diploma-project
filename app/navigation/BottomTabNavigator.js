import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabNavigator = () =>{
  return(
      <Navigator
        initialRouteName='Home'  
        screenOptions={{headerShown: false}}
      >
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Settings" component={SettingsScreen} />
      </Navigator>
  );
}

export default BottomTabNavigator;