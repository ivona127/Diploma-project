import { Text, View} from "react-native";

import EmergencyPhoneButton from '../../components/emergencyPhoneButton/EmergencyPhoneButton';
import SOSButton from "../../components/SOSButton/SOSButton";

import styles from './HomeScreenStyles';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.topTextContainer}>
                <Text style={styles.primaryText}>
                    Телефонни номера при необходимост
                </Text>
                <Text style={styles.secondaryText}>
                    Свържете се директно
                </Text>
            </View>

            <View style={styles.emergencyPhonesContainer}>
                <EmergencyPhoneButton phoneNumber='112' />
                <EmergencyPhoneButton phoneNumber='150' />
            </View>

            <View style={styles.redButtonContainer}>
                <SOSButton/>
            </View>
            
            <View style={styles.bottomTextContainer}>
                <Text style={styles.primaryText}>
                    Нуждаете се от спешна помощ?
                </Text>
                <Text style={styles.secondaryText}>
                    Натиснете бутона за спешност
                </Text>
            </View>
        </View>
    );
}

export default HomeScreen;
