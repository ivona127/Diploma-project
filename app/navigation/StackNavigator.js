import {createStackNavigator} from '@react-navigation/stack'
import EmergencyOptionsScreen from '../screens/EmergencyOptionsScreen';
import MainScreen from '../screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

const {Navigator, Screen} = createStackNavigator();

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Navigator 
                initialRouteName='Tab'  
                // screenOptions={{headerShown: false}}
            >
                <Screen name='Tab' component={BottomTabNavigator}/>
                <Screen name='Menu' component={EmergencyOptionsScreen}/>
                <Screen name='Main' component={MainScreen}/>
            </Navigator>
        </NavigationContainer>
    );
};


export default StackNavigator;