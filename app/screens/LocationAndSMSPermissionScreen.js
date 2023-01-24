import {useState} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import { COLORS } from '../const/colors';
import { useNavigation } from '@react-navigation/native';

const LocationAndSMSPermissionScreen = () => {
    const [smsPermission, setSmsPermission] = useState(false);
    const [locationPermission, setLocationPermission] = useState(false);
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('Tab');
    }

    return(
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title}>
                    Позволете на приложението да използва вашето местоположение 
                    и да изпраща SMS съобщения от ваше име:</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Разрешете да се използване вашето местоположение:</Text>
                <Switch
                    thumbColor='white'
                    trackColor={{ true: COLORS.red }}
                    value={locationPermission} 
                    onValueChange={(value) => setLocationPermission(value)}
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.text}>Разрешете да се изпраща SMS при нужда:</Text>
                <Switch 
                    thumbColor='white'
                    trackColor={{ true: COLORS.red }}
                    value={smsPermission} onValueChange={(value) => setSmsPermission(value)}
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
        backgroundColor: COLORS.grey
    },

    input_container:{
        justifyContent:'center', 
        alignItems:'center',
        // marginBottom:40,
        // marginTop:10,
        elevation:2,
        backgroundColor: COLORS.grey
    }, 

    card:{
        padding:30,
        // marginBottom:30,
        marginTop:20,
        height: 'auto',
        width: '85%',
        borderRadius:20,
        backgroundColor: COLORS.white,
        // alignItems: 'center',
        elevation:10   
    },

    title:{
        color: COLORS.black,
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
        color: COLORS.red,
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
        backgroundColor:COLORS.red,
    },

    button_text:{
        color: COLORS.white,
        fontWeight:'bold',
        fontFamily: 'Roboto',
        fontSize: 25,
    }
})

export default LocationAndSMSPermissionScreen;