import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import LottieView from 'lottie-react-native';
import styles from './SOSButtonStyles';

const SOSButton = ({secretKey}) => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('EmergencyOptionsScreen');
    }

    return (
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => handleButtonPress()}
        >
            
            <View style={styles.lottieContainer}>
                <LottieView style={styles.lottie}
                    source={require('../../../assets/lottie/circle-red-button.json')}
                    speed={0.5}
                    autoPlay
                />
            </View>

            <Text style={styles.text}>
                SOS
            </Text>
        </TouchableOpacity>
    );
}

export default SOSButton;