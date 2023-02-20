import {useState} from 'react';
import {Alert, Switch, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import * as Location from 'expo-location';

import styles from './LocationPermissionScreenStyles';

const LocationPermissionScreen = ({route}) => {
    const navigation = useNavigation();

    const [canContinue, setCanContinue] = useState(false);
    const [locationPermission, setLocationPermission] = useState(false);

    const handleButtonPress = () => {
        if(canContinue){
            navigation.navigate('BottomTabNavigator', {secretKey: route.params.secretKey});
        } else{
            Alert.alert('Не може да продължите без да разрешите настройката');
        }
    }

    const requestLocationPermission = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        
        if (status === 'granted') {
            setCanContinue(true);
        } else {
            Alert.alert('Не разрешихте използването на местополежието Ви')
        }
    
    };

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Позволете на приложението да използва вашето местоположение 
                </Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>
                        Необходимо е вашето разрешение: 
                    </Text>

                    <Switch
                        trackColor={{true: styles.swithTrackColor.color}}
                        thumbColor={styles.swithThumbColor.color}
                        value={locationPermission} 
                        onValueChange={(value) => {
                            setLocationPermission(value);
                            
                            if (value) {
                                requestLocationPermission();
                            } else{
                                setCanContinue(false)
                            }
                        }}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => handleButtonPress()}>
                        Напред
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LocationPermissionScreen;