import {createStackNavigator} from '@react-navigation/stack'
import BottomTabNavigator from './BottomTabNavigator';
import NumberOfPhoneNumbersScreen from '../screens/NumberOfPhoneNumbersScreen';
import PhoneNumberEntryScreen from '../screens/PhoneNumberEntryScreen';
import LocationPermissionScreen from '../screens/LocationPermissionScreen';
import EmergencyOptionsScreen from '../screens/EmergencyOptionsScreen';
import MainScreen from '../screens/MainScreen';
import FirstAid from '../screens/FirstAidScreen';
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
                initialRouteName='Tab' 
                screenOptions={{headerShown: false}}
            >
                <Screen name='NumberOfPhoneNumbersScreen' component={NumberOfPhoneNumbersScreen}/>
                <Screen name='PhoneNumberEntryScreen' component={PhoneNumberEntryScreen}/>
                <Screen name='LocationPermissionScreen' component={LocationPermissionScreen}/>
                <Screen name='Tab' component={BottomTabNavigator}/>
                <Screen name='Menu' component={EmergencyOptionsScreen}/>
                <Screen name='Main' component={MainScreen}/>
                <Screen name='FirstAid' component={FirstAid}/>
            </Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;