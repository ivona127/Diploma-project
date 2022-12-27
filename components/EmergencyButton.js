import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';
import {useFonts} from 'expo-font';


const EmergencyButton = () => {
    return(
        <View style={styles.container}>
           <TouchableOpacity style={styles.button}> 
               
                <LottieView style={styles.lottie}
                    source={require('../assets/lottie/circle-red-button.json')}
                    speed={0.5}
                    autoPlay
                />

                <Text style={styles.text}>SOS</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,  
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    text:{
        fontSize: 40,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    lottie:{
        position:'absolute',
        resizeMode:'cover',
        height:250,
        width:250
    }
});

export default EmergencyButton;