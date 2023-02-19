import {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import AmountOfPhoneNumbersScreen from '../screens/amountOfPhoneNumbersScreen/AmountOfPhoneNumbersScreen';
import BottomTabNavigator from './bottomTabNavigator/BottomTabNavigator';
import EmergencyOptionsScreen from '../screens/emergencyOptionsScreen/EmergencyOptionsScreen';
import HospitalListScreen from '../screens/hospitalListScreen/HospitalListScreen';
import InstructionsScreen from '../screens/InstructionsScreen/InstructionsScreen';
import LocationPermissionScreen from '../screens/locationPermissionScreen/LocationPermissionScreen'
import PhoneNumberEntryScreen from '../screens/phoneNumberEntryScreen/PhoneNumberEntryScreen';

const {Navigator, Screen} = createStackNavigator();

const StackNavigator = () => {
    const hasCompletedInitialScreens = useSelector(state => state.hasCompletedInitialScreens)

    return(
        <NavigationContainer>
            <Navigator 
                // initialRouteName={hasCompletedInitialScreens ? 'BottomTabNavigator' : 'AmountOfPhoneNumbersScreen'}  
                initialRouteName='AmountOfPhoneNumbersScreen' 
                screenOptions={{headerShown: false}}
            >
                <Screen name='AmountOfPhoneNumbersScreen' component={AmountOfPhoneNumbersScreen}/>
                <Screen name='PhoneNumberEntryScreen' component={PhoneNumberEntryScreen}/>
                <Screen name='LocationPermissionScreen' component={LocationPermissionScreen}/> 
                <Screen name='BottomTabNavigator' component={BottomTabNavigator}/>
                <Screen name='EmergencyOptionsScreen' component={EmergencyOptionsScreen}/>
                <Screen name='HospitalListScreen' component={HospitalListScreen}/>
                <Screen name='InstructionsScreen' component={InstructionsScreen}/>
            </Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;