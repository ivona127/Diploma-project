import { View, Text, StyleSheet} from "react-native";
import {COLORS} from '../const/colors';
import GetDefaultNumbers from '../components/GetDefaultNumbers';

const SettingsScreen = () =>{

    const phoneNumbers = new GetDefaultNumbers();

    return (
        <View style={styles.container}>
            <View style={styles.text_container}>
                <Text style={styles.text}>Променете номерата по подразбиране</Text>
                <Text style={styles.secondary_text}>До тези номера ще бъде изпратена информица за вашето местоположение и място при спешен случай</Text>
            </View>
            <View style={{margin:10}}>
            {phoneNumbers.map((part, index) => (
                <View key={index} style={styles.mobile_phone_container}>
                    <Text>{part}</Text>
                </View>
            ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.grey
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

    mobile_phone_container:{
        borderRadius:10,
        backgroundColor:COLORS.white,
        elevation:10,
        justifyContent:'center',
        alignItems: 'center',
        margin:10,
        height:'20%'
        // width:'40%',
    }
});

export default SettingsScreen;
