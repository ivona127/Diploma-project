import {Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GetDefaultNumbers from '../../utils/GetDefaultNumbers';

import styles from './SettingsScreenStyles';

const SettingsScreen = () =>{
    const navigation = useNavigation();

    const {phoneNumbers, phoneHolders} = new GetDefaultNumbers();

    const editPhoneContact = (index) => {
        while (phoneNumbers.length < 3) {
            phoneNumbers.push('');
            phoneHolders.push('');
        }

        navigation.navigate('PhoneNumberEntryScreen', {
            pickerNumber: 1,
            phoneNumbers: phoneNumbers,
            phoneHolders: phoneHolders,
            selectedContactIndex: index
        });
    };
   
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
                        <View>
                            <Text style={styles.mobilePhoneText}>
                                <Text style={styles.labelText}>Име: </Text>
                                {phoneHolders[index]}
                            </Text>

                            <Text style={styles.mobilePhoneText}>
                                <Text style={styles.labelText}>Номер: </Text>
                                {part}
                            </Text>
                        </View>

                        <TouchableOpacity 
                            onPress={() => editPhoneContact(index)}
                            style={styles.editButton}
                        >
                            <Text style={styles.buttonText}>Редактирай</Text>
                        </TouchableOpacity>
                       
                    </View>
                ))}
            </View>
        </View>
    );
}

export default SettingsScreen;