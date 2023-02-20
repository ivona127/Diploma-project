import {Text, View} from 'react-native';
import GetDefaultNumbers from '../../utils/GetDefaultNumbers';

import styles from './SettingsScreenStyles';

const SettingsScreen = (props) =>{
    const {secretKey} = props.route.params;

    const phoneNumbers = new GetDefaultNumbers({secretKey});
   
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Списък на номерата по подразбиране
                </Text>

                <Text style={styles.secondaryText}>
                    До тези номера ще бъде изпратена информация за 
                    вашето местоположение и текущо време при спешен случай
                </Text>
            </View>

            <View style={styles.mobilePhonesList}>
                {phoneNumbers.map((part, index) => (
                    <View key={index} style={styles.mobilePhoneContainer}>
                        <Text style={styles.mobilePhoneText}>
                            {part}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default SettingsScreen;