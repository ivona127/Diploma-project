import {useState} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import colors from '../theme/Colors';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';


const LocationAndSMSPermissionScreen = () => {
    const [locationPermission, setLocationPermission] = useState(false);
    const [canContinue, setCanContinue] = useState(false);
    const navigation = useNavigation();

    const handleButtonPress = () => {
        if(canContinue){
            navigation.navigate('Tab');
        } else{
            Alert.alert('Изисква се разрешение, за да продължите');
        }
    }

    const requestLocationPermission = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        
        if (status === 'granted') {
            setCanContinue(true);
        } else {
            Alert.alert('Не разрешихте използването на местополежието ви')
        }
    
    };

    return(
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title}>
                    Позволете на приложението да използва вашето местоположение 
                    и да изпраща SMS съобщения от ваше име:</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Разрешете да се използва вашето местоположение:</Text>
                <Switch
                    thumbColor='white'
                    trackColor={{ true: colors.primary }}
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

            <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text} onPress={() => handleButtonPress()}>Напред</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },

    input_container:{
        justifyContent:'center', 
        alignItems:'center',
        // marginBottom:40,
        // marginTop:10,
        elevation:2,
        backgroundColor: colors.background
    }, 

    card:{
        padding:30,
        // marginBottom:30,
        marginTop:20,
        height: 'auto',
        width: '85%',
        borderRadius:20,
        backgroundColor: colors.white,
        // alignItems: 'center',
        elevation:10   
    },

    title:{
        color: colors.text,
        fontSize:17,
        fontFamily: 'Roboto',
        // fontWeight: 'bold',
    },

    title_container:{
        marginBottom:10,
        paddingLeft:20,
        paddingRight:20,
    },

    text:{
        color: colors.primary,
        fontFamily:'Roboto',
        fontWeight: 'bold',
        fontSize:15,
        // marginTop:20
    },

    button:{
        width: '50%',
        height: '8%',
        margin: 40,
        borderRadius:20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.primary,
    },

    button_text:{
        color: colors.white,
        fontWeight:'bold',
        fontFamily: 'Roboto',
        fontSize: 25,
    }
})

export default LocationAndSMSPermissionScreen;