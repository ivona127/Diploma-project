import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';

import styles from './AmountOfPhoneNumbersScreenStyles';

const AmountOfPhoneNumbersScreen = () =>{
    const navigation = useNavigation();

    const [pickerNumber, setPickerNumber] = useState(1);

    const handlePickerChange = (itemValue) => {
        setPickerNumber(itemValue);
    }

    const handleButtonPress = () => {
        navigation.navigate('PhoneNumberEntryScreen', {pickerNumber: pickerNumber});
    }

    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Въведете брой на номерата по подразбиране
                </Text>

                <Text style={styles.secondaryText}>
                    При спешност ще бъдат изпратени 
                    съобщения с молба за помощ до 
                    посочените от Вас контакти
                </Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>
                        Изберeте броя телефонни номера за въвеждане:
                    </Text>
                    
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={pickerNumber}
                            style={styles.picker}
                            onValueChange={handlePickerChange}
                        >
                            
                            <Picker.Item label='1' value={1} />
                            <Picker.Item label='2' value={2} />
                            <Picker.Item label='3' value={3} />
                        </Picker>
                    </View>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => handleButtonPress()}> 
                        Напред
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AmountOfPhoneNumbersScreen;