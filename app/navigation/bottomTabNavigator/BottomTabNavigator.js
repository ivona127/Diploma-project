import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../screens/homeScreen/HomeScreen';
import SettingsScreen from '../../screens/settingsScreen/SettingsScreen';

import styles from './BottomTabNavigatorStyles'

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabNavigator = () => {
    let Home = 'Начало';
    let Settings = 'Настройки';

    const TabBarIcon = ({name, focused}) => (
        <View style={styles.tabBarIconContainer}>
            {name == Home ? (
                <MaterialCommunityIcons
                    name='home'
                    style={[styles.tabBarIcon, focused && styles.focusedTabBarIcon]}
                />
            ) : (
                <Ionicons 
                    name='settings' 
                    style={[styles.tabBarIcon, focused && styles.focusedTabBarIcon]} 
                />
            )}
        </View>
    );

    const TabBarLabel = ({name, focused}) => (
        <View style={styles.tabBarLabelContainer}>
            <Text style={[styles.tabBarLable, focused && styles.focusedTabBarLable]}>
                {name}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Navigator
                initialRouteName={Home}
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Screen
                    name={Home}
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon name={Home} focused={focused} />,
                        tabBarLabel: ({focused}) => <TabBarLabel name={Home} focused={focused} />
                    }}
                />

                <Screen
                    name={Settings}
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon name={Settings} focused={focused} />,
                        tabBarLabel: ({focused}) => <TabBarLabel name={Settings} focused={focused} />
                    }}
                />
            </Navigator>
        </View>
    );
}

export default BottomTabNavigator;