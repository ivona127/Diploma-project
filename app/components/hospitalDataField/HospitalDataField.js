import {Linking, Text, TouchableOpacity, View} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';
import makeCall from '../../utils/PhoneCall';

import styles from './HospitalDataFieldStyles';

const HospitalDataField = ({item}) => {
    
    const navigateToEndPoint = (latitude, longitude) => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
        Linking.openURL(url);
    };

    return ( 
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.hospitalName}>
                    {item.name}
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => makeCall(item.tel)}
                >
                    <View style={styles.iconContainer}>
                        <LottieView 
                            style={styles.lottie}
                            source={require('../../../assets/lottie/circle-red-button.json')}
                            autoPlay={false}
                        />                    

                        <Feather name="phone-call" style={styles.icon}/>
                    </View>

                </TouchableOpacity>
                  
                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigateToEndPoint(item.latitude, item.longitude)}
                >
                    <View style={styles.iconContainer}>
                        <LottieView 
                            style={styles.lottie}
                            source={require('../../../assets/lottie/circle-red-button.json')}
                            autoPlay={false}
                        />                    

                        <Feather name="navigation" style={styles.icon}/>
                    </View>    
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HospitalDataField;