import {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneInput from 'react-native-phone-number-input';
import PhoneNumber from 'google-libphonenumber'
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './PhoneNumberEntryScreenStyle';

const PhoneNumberEntryScreen = ({route}) =>{
    const navigation = useNavigation();

    const pickerNumber = route.params.pickerNumber;
    const [inputNumber, setInputNumber] = useState(Array(pickerNumber).fill(''));

    const phoneUtil = PhoneNumber.PhoneNumberUtil.getInstance();

    const handleButtonPress = (screenNum) => {
        if(screenNum){
            navigation.navigate('LocationPermissionScreen');        
        } else {
            navigation.navigate('AmountOfPhoneNumbersScreen');
        }
    }

    const handlePhoneInputChange = (index, value) => {
        const updatedNumbers = [...inputNumber];
        updatedNumbers[index] = value;
        setInputNumber(updatedNumbers);
    }

    const saveNumbers = async() => {
        let isValid = true;

        for(let i = 0; i < pickerNumber; i++) {
            if (inputNumber[i].trim() === '') {
                isValid = false;
                Alert.alert('Няма въведена информация за "Телефон номер "' + (i + 1));
                break;
            }

            const parsedPhoneNumber = phoneUtil.parseAndKeepRawInput(inputNumber[i], 'BG');

            if (!phoneUtil.isValidNumber(parsedPhoneNumber)) {
                isValid = false;
                Alert.alert('Въведеният телефонен номер ' + (i + 1) + ' е неправилен');
            }
        }

        if(isValid) {
            if (new Set(inputNumber).size !== pickerNumber) {
                Alert.alert('Телефонните номера не могат да бъдат еднакви');
            } else {
                try {
                    const savedNumbers = [...inputNumber];

                    inputNumber.forEach((value, index) => {
                        savedNumbers[index] = value;
                    });

                    setInputNumber(savedNumbers);

                    await AsyncStorage.setItem('@number', JSON.stringify(inputNumber));
                } catch (e) {
                    console.log(e);
                }
    
                handleButtonPress(screenNum=1);
            }
        }
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton} onPress={() => handleButtonPress(screenNum=0)}>
                <AntDesign 
                    name='arrowleft' 
                    style={styles.icon} 
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Добавете телефонен номер по подразбиране:
                </Text>

                <Text style={styles.secondaryText}>
                    Броят на полетата за въвеждане се променя в зависимост от избора на потребителя
                </Text>
            </View>
            
            {inputNumber.map((number, index) => (
                <View style={styles.cardContainer} key={index}>
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardText}>
                            Телефонен номер {index + 1}:
                        </Text>
                            
                        <View style={styles.inputContainer}>
                            <PhoneInput
                                defaultValue = {number}
                                defaultCode='BG'
                                flagButtonStyle={{display: 'none'}}
                                placeholder= 'Въведете номер тук'
                                onChangeFormattedText={value => handlePhoneInputChange(index, value)}
                            />
                        </View>
                    </View>
                </View>
            ))}

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={saveNumbers}>
                    <Text style={styles.buttonText}>
                        Запази
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PhoneNumberEntryScreen;