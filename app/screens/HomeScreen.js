import { Text, View, TouchableOpacity, StyleSheet} from "react-native";
import EmergencyButton from "../components/EmergencyButton"
import {COLORS} from '../const/colors'
import Feather from 'react-native-vector-icons/Feather';
import PhoneCall from 'react-native-phone-call';

const HomeScreen = () => {

    const makeCall = (phoneNumber) => {
        const args = {
            number: phoneNumber,
            prompt: false,
        };
        PhoneCall(args).catch(console.error);
    };

    return(
        <View style={styles.container}>
            <View style={styles.text_container}>
                <Text style={styles.text}>
                    Телефонни номера при необходимост
                </Text>
                <Text style={styles.secondary_text}>
                    Свържете се директно
                </Text>
            </View>

            <View style={styles.emergency_phones_container}>
                <TouchableOpacity style={styles.emergency_phone_button} onPress={() => makeCall('112')}>
                    <Feather name='phone-call' size={25} style={styles.icon}/>
                    <Text style={styles.emergency_phone_button_text}>112</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.emergency_phone_button} onPress={() => makeCall('150')}>
                    <Feather name='phone-call' size={25} style={styles.icon}/>
                    <Text style={styles.emergency_phone_button_text}>150</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button_container}>
                <EmergencyButton/>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.text}>
                    Нуждаете се от спешна помощ?
                </Text>
                <Text style={styles.secondary_text}>
                    Натиснете бутона за спешност
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        backgroundColor: COLORS.grey,
    },
    
    button_container:{
        alignItems: 'center',
        marginBottom:20
    },

    text_container:{
        alignItems:'center',
        marginTop:60,
        marginBottom:20
    },

    text:{
        color: COLORS.black,
        fontFamily:'Roboto',
        fontSize:20,
        fontWeight: 'bold',
    },

    secondary_text:{
        color: COLORS.black,
        fontFamily:'Roboto',
        fontSize:15,
        marginTop:5
    },

    emergency_phones_container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        height:'10%',
        marginBottom:80 
    },

    emergency_phone_button:{
        borderRadius:10,
        backgroundColor:COLORS.white,
        alignItems: 'center',
        elevation:10,
        flexDirection:'row',
        width:'40%',
        justifyContent:'space-evenly',        
    },

    emergency_phone_button_text:{
        fontFamily:'Roboto',
        fontSize:20,
        fontWeight: 'bold',
        color:COLORS.black
    },

    icon:{
        color:COLORS.red
    }
});

export default HomeScreen;
