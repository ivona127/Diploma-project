import {createStackNavigator} from '@react-navigation/stack'
import BottomTabNavigator from './bottomTabNavigator/BottomTabNavigator';
import AmountOfPhoneNumbersScreen from '../screens/amountOfPhoneNumbersScreen/AmountOfPhoneNumbersScreen';
import PhoneNumberEntryScreen from '../screens/phoneNumberEntryScreen/PhoneNumberEntryScreen';
import LocationPermissionScreen from '../screens/locationPermissionScreen/LocationPermissionScreen'
import EmergencyOptionsScreen from '../screens/emergencyOptionsScreen/EmergencyOptionsScreen';
import HospitalListScreen from '../screens/hospitalListScreen/HospitalListScreen';
import AllergyInstructionScreen from '../screens/firstAidScreens/allergyInstructionScreen/AllergyInstructionScreen';

import { NavigationContainer } from '@react-navigation/native';
import {useSelector} from 'react-redux';

const {Navigator, Screen} = createStackNavigator();

const StackNavigator = () => {
    const hasCompletedInitialScreens = useSelector(state => state.hasCompletedInitialScreens)

    // useEffect(() => {
    //     if(hasCompletedInitialScreens){
    //         navigation.navigate('Tab')
    //     }
    // }, [hasCompletedInitialScreens, navigation])

    return(
        <NavigationContainer>
            <Navigator 
                // initialRouteName={hasCompletedInitialScreens ? 'Tab' : 'NumberOfPhoneNumbersScreen'}  
                initialRouteName='AllergyInstructionScreen' 
                screenOptions={{headerShown: false}}
            >
                <Screen name='AmountOfPhoneNumbersScreen' component={AmountOfPhoneNumbersScreen}/>
                <Screen name='PhoneNumberEntryScreen' component={PhoneNumberEntryScreen}/>
                <Screen name='LocationPermissionScreen' component={LocationPermissionScreen}/> 
                <Screen name='BottomTabNavigator' component={BottomTabNavigator}/>
                <Screen name='EmergencyOptionsScreen' component={EmergencyOptionsScreen}/>
                <Screen name='HospitalListScreen' component={HospitalListScreen}/>
                <Screen name='AllergyInstructionScreen' component={AllergyInstructionScreen}/>
            </Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;