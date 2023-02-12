import {TouchableOpacity, Text, View} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import MaterialCommunityIconsfrom from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './HealthIssueButtonStyles';

const HealthIssueButton = (props) => {
    
    const handleButtonPress = () => {
        props.onPress(); // Call the callback function passed as a prop
    }
    
    const iconType  = (iconFont, iconName) => {
        switch (iconFont) {
            case 'FontAwesome':
                return(
                    <FontAwesome name={iconName} style={styles.icon}/>
                );

            case 'FontAwesome5':
                return(
                    <FontAwesome5 name={iconName} style={styles.icon}/>
                );

            case 'MaterialCommunityIconsfrom':
                    return(
                        <MaterialCommunityIconsfrom name={iconName} style={styles.icon}/>
                    );
        
            case 'MaterialIcons':
                return(
                    <MaterialIcons name={iconName} style={styles.icon}/>
                );
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => handleButtonPress()}
            >
                
                <View style={styles.icon_container}>
                    <LottieView 
                        style={styles.lottie}
                        source={require('../../../assets/lottie/circle-red-button.json')}
                        autoPlay={false}
                    />
                
                    {iconType(props.iconFont, props.iconName)}
                </View>
                
                <Text style={styles.text}>
                    {props.buttonText} 
                </Text> 
                    
                <EvilIcons 
                    name='arrow-right' 
                    style={styles.arrow}
                />

            </TouchableOpacity>        
        </View>
    );
}

export default HealthIssueButton;