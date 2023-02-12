import {createStackNavigator} from '@react-navigation/stack'
import BottomTabNavigator from './bottomTabNavigator/BottomTabNavigator';
import NumberOfPhoneNumbersScreen from '../screens/NumberOfPhoneNumbersScreen';
import PhoneNumberEntryScreen from '../screens/PhoneNumberEntryScreen';
import LocationPermissionScreen from '../screens/LocationPermissionScreen';
import EmergencyOptionsScreen from '../screens/emergencyOptionsScreen/EmergencyOptionsScreen';
import HospitalListScreen from '../screens/hospitalListScreen/HospitalListScreen';
import LossOfConsciousness from '../screens/LossOfConsciousness';
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
                initialRouteName='BottomTabNavigator' 
                screenOptions={{headerShown: false}}
            >
                {/* <Screen name='NumberOfPhoneNumbersScreen' component={NumberOfPhoneNumbersScreen}/>
                <Screen name='PhoneNumberEntryScreen' component={PhoneNumberEntryScreen}/>*/}
                <Screen name='LocationPermissionScreen' component={LocationPermissionScreen}/> 
                <Screen name='BottomTabNavigator' component={BottomTabNavigator}/>
                <Screen name='EmergencyOptionsScreen' component={EmergencyOptionsScreen}/>
                <Screen name='HospitalListScreen' component={HospitalListScreen}/>
                {/*<Screen name='LossOfConsciousness' component={LossOfConsciousness}/> */}
            </Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;