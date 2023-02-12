import { TouchableOpacity, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import makeCall from '../PhoneCall';
import styles from './EmergencyPhoneButtonStyles';

const EmergencyPhoneButton = ({phoneNumber}) => (
    <TouchableOpacity
        style={styles.emergencyPhoneButton}
        onPress={() => makeCall(phoneNumber)}
    >
        <Feather 
            name="phone-call" 
            style={styles.icon} 
        />
        
        <Text style={styles.emergencyPhoneButtonText}>
            {phoneNumber}
        </Text>

    </TouchableOpacity>
);

export default EmergencyPhoneButton;