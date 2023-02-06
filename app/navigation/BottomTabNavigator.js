import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../const/colors';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabNavigator = () =>{
  let Home = 'Начало';
  let Settings = 'Настройки';

  return(
    <View style={{flex:1, backgroundColor:COLORS.grey}}>
      <Navigator
        // initialRouteName={Home}  
        screenOptions={{
          headerShown: false,
          tabBarStyle:{
            backgroundColor: COLORS.white,
            margin:15,
            paddingBottom:5,
            borderRadius:40,          
            height:'10%',
            elevation:10,
          },
        }
      }
      >
        <Screen 
          name={Home} 
          component={HomeScreen} 
          options={{
            
            tabBarIcon: ({focused}) => (
              <View style={{fontFamily:'Roboto', position:'absolute', top:'15%'}}>
                <MaterialCommunityIcons name="home" size={30} color={focused? COLORS.red : COLORS.black} />
              </View>
            ),

            tabBarLabel: ({focused}) => (
              <View style={{position:'absolute', bottom:'5%'}}>
                <Text style={{ fontFamily:'Roboto', color: focused ? COLORS.red : COLORS.black }}>{Home}</Text>
              </View>
            )
          }}
        />

        <Screen 
          name={Settings} 
          component={SettingsScreen} 
          options={{  
            tabBarIcon: ({focused}) => (
              <View style={{position:'absolute', top:'15%', alignItems: 'center'}}>
                <Ionicons name="settings" size={30} color= {focused? COLORS.red : COLORS.black} />
              </View>
            ),

            tabBarLabel: ({focused}) => (
              <View style={{position:'absolute', bottom:'5%', alignItems: 'center'}}>
                <Text style={{ color: focused ? COLORS.red : COLORS.black }}>{Settings}</Text>
              </View>
            )
          }}

        />
      </Navigator>
      </View>
  );
}

export default BottomTabNavigator;