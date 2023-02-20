import {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AmountOfPhoneNumbersScreen from '../screens/amountOfPhoneNumbersScreen/AmountOfPhoneNumbersScreen';
import BottomTabNavigator from './bottomTabNavigator/BottomTabNavigator';
import EmergencyOptionsScreen from '../screens/emergencyOptionsScreen/EmergencyOptionsScreen';
import HospitalListScreen from '../screens/hospitalListScreen/HospitalListScreen';
import InstructionsScreen from '../screens/InstructionsScreen/InstructionsScreen';
import LocationPermissionScreen from '../screens/locationPermissionScreen/LocationPermissionScreen'
import PhoneNumberEntryScreen from '../screens/phoneNumberEntryScreen/PhoneNumberEntryScreen';

const {Navigator, Screen} = createStackNavigator();

const StackNavigator = () => {

    const [initialRoute, setInitialRoute] = useState('AmountOfPhoneNumbersScreen');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkIfUserVisitedBefore = async () => {
            const hasVisitedBefore = await AsyncStorage.getItem('hasVisitedBefore');

            if (hasVisitedBefore) {
                setInitialRoute('BottomTabNavigator');
            } else {
                await AsyncStorage.setItem('hasVisitedBefore', 'true');
            }

            setIsLoading(false);
        };

        checkIfUserVisitedBefore();
    }, []);

    if (isLoading) {
        return null; // render a loading indicator instead of the Navigator
    }

    return(
        <NavigationContainer>
            <Navigator 
                initialRouteName={initialRoute}
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