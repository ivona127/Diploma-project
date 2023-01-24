import {createStackNavigator} from '@react-navigation/stack'
import BottomTabNavigator from './BottomTabNavigator';
import NumberOfPhoneNumbersScreen from '../screens/NumberOfPhoneNumbersScreen';
import PhoneNumberEntryScreen from '../screens/PhoneNumberEntryScreen';
import LocationPermissionScreen from '../screens/LocationPermissionScreen';
import EmergencyOptionsScreen from '../screens/EmergencyOptionsScreen';
import MainScreen from '../screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';

const {Navigator, Screen} = createStackNavigator();

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Navigator 
                initialRouteName='LocationPermissionScreen'  
                screenOptions={{headerShown: true}}
            >
                <Screen name='NumberOfPhoneNumbersScreen' component={NumberOfPhoneNumbersScreen}/>
                <Screen name='PhoneNumberEntryScreen' component={PhoneNumberEntryScreen}/>
                <Screen name='LocationPermissionScreen' component={LocationPermissionScreen}/>
                <Screen name='Tab' component={BottomTabNavigator}/>
                <Screen name='Menu' component={EmergencyOptionsScreen}/>
                <Screen name='Main' component={MainScreen}/>
            </Navigator>
        </NavigationContainer>
    );
};


export default StackNavigator;