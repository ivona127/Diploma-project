import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIconsfrom from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../const/colors';

const EventButton = (props) => {
    
    const iconType  = (iconFont, iconName) => {
        switch (iconFont) {
            case 'FontAwesome':
                return(
                    <FontAwesome name={iconName} size={50} style={styles.icon}/>
                );

            case 'FontAwesome5':
                return(
                    <FontAwesome5 name={iconName} size={50} style={styles.icon}/>
                );

            case 'MaterialCommunityIconsfrom':
                    return(
                        <MaterialCommunityIconsfrom name={iconName} size={50} style={styles.icon}/>
                    );
        
            case 'MaterialIcons':
                return(
                    <MaterialIcons name={iconName} size={50} style={styles.icon}/>
                );
        
        }
    }
    
    const handleButtonPress = () => {
        props.onPress(); // Call the callback function passed as a prop
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress()}>
                
                <View style={styles.icon_container}>
                
                    <LottieView 
                        style={styles.lottie}
                        source={require('../../../assets/lottie/circle-red-button.json')}

                        autoPlay={false}
                    />
                
                    {iconType(props.iconFont, props.iconName)}        
                
                </View>

                <Text style={styles.text}>{props.buttonText} </Text> 

                </TouchableOpacity>        
            </View>
    );
}


const styles = StyleSheet.create({
    container: {
      margin:10
    },

    icon_container:{
        alignItems: 'center',
        justifyContent: 'center',
        margin:30
    },

    button:{
        width:150,
        height:150,
        alignItems: 'center',        
        borderRadius:10,
        backgroundColor:COLORS.white,
        elevation:10,    
    },

    lottie:{
        position:'absolute',
        resizeMode:'cover',
        height:120,
        width:120
    },
    
    text:{
        fontSize: 15,
        color: COLORS.black,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textAlign:'center'    
    }, 

    icon:{
        color:"white"
    } 
});

export default EventButton;