import { View, Text, StyleSheet} from "react-native";

import GetDefaultNumbers from '../../components/GetDefaultNumbers';
import styles from './SettingsScreenStyles';

const SettingsScreen = () =>{
    const phoneNumbers = new GetDefaultNumbers();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Списък на номерата по подразбиране
                </Text>

                <Text style={styles.secondaryText}>
                    До тези номера ще бъде изпратена информица за 
                    вашето местоположение и текущо време при спешен случай
                </Text>
            </View>

            <View style={{alignItems:'center'}}>
                {phoneNumbers.map((part, index) => (
                    <View key={index} style={styles.mobilePhoneContainer}>
                        <Text>
                            {part}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default SettingsScreen;