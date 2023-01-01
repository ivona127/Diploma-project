import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useState } from "react";
import LottieView from 'lottie-react-native';
import EmergencyEventsMenu from "./EmergencyEventsMenu";


const EmergencyButton = () => {
    const [isModelVisible, setisModelVisible] = useState(false);

    function changeVisibility(){
        setisModelVisible(!isModelVisible);
    }

    return(
        <View style={styles.container}>
           <Modal 
                visible={isModelVisible}
                animationType='fade'
            >
                <EmergencyEventsMenu />
            </Modal>
           
           <TouchableOpacity style={styles.button} onPress= {() => changeVisibility()}> 
               
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
        justifyContent: 'center', 
        backgroundColor:'#f2f2f2'
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