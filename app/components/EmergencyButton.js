import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../const/colors';

const EmergencyButton = () => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('Menu');
    }

    return(
        <View style={styles.container}>
           <TouchableOpacity style={styles.button} onPress= {() => handleButtonPress()}> 
               
                <LottieView style={styles.lottie}
                    source={require('../../assets/lottie/circle-red-button.json')}
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
        justifyContent: 'center', 
        backgroundColor: COLORS.grey
    },

    button: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    text:{
        fontSize: 40,
        color: COLORS.white,
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