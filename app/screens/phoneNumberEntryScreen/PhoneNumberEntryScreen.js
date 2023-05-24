import {useState, useEffect} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import IntlPhoneInput from 'react-native-intl-phone-input';
import PhoneNumber from 'google-libphonenumber'

import BackButton from '../../components/backButton/BackButton';
import CryptoJS from 'react-native-crypto-js';

import styles from './PhoneNumberEntryScreenStyle';

const PhoneNumberEntryScreen = ({ route }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { pickerNumber, phoneNumbers, phoneHolders, selectedContactIndex } = route.params;
    const [inputNumber, setInputNumber] = useState(selectedContactIndex === undefined ? Array(pickerNumber).fill('') : phoneNumbers);
    const [phoneNumberHolder, setPhoneNumberHolder] = useState(selectedContactIndex === undefined ? Array(pickerNumber).fill('') : phoneHolders);
    const [secretKey, setSecretKey] = useState('');

    const phoneUtil = PhoneNumber.PhoneNumberUtil.getInstance();

    useEffect(() => {
        const newSecretKey = CryptoJS.lib.WordArray.random(16).toString();
        setSecretKey(newSecretKey);
        dispatch({ type: 'SET_SECRET_KEY', secretKey: newSecretKey });
    }, [dispatch]);

    const handleButtonPress = (screenNum) => {
        if (selectedContactIndex !== undefined) {
          navigation.navigate('BottomTabNavigator', { screen: 'Настройки' });
        } else {
            if (screenNum) {
                navigation.navigate('LocationPermissionScreen');
            } else {
                navigation.navigate('AmountOfPhoneNumbersScreen');
            }
        }
    }

    const encryptedNumbers = inputNumber.map((number) => {
        const encryptedNumbers = CryptoJS.AES.encrypt(number, secretKey).toString();
        return encryptedNumbers;
    });

    const handlePhoneInputChange = (index, value) => {
        const updatedNumbers = [...inputNumber];
        const formattedPhoneNumber = `${value.dialCode}${value.unmaskedPhoneNumber}`;

        updatedNumbers[index] = formattedPhoneNumber;
        setInputNumber(updatedNumbers);
    }

    const handlePhoneNumberHolderChange = (index, holderName) => {
        const updatedHolders = [...phoneNumberHolder];
        updatedHolders[index] = holderName;
        setPhoneNumberHolder(updatedHolders);
    };

    const saveNumbers = async () => {
        let isValid = true;
        let errorMessages = []; // Declaration of errorMessages array

        for (let i = 0; i < inputNumber.length; i++) {
          
            // Check if the selectedContactIndex is 2 and the previous number is undefined
            if(
              selectedContactIndex === 2 && 
              inputNumber[selectedContactIndex - 1] === undefined
            ){
                isValid = false;
      
                // Remove the last two elements from the inputNumber and phoneNumberHolder arrays
                inputNumber.pop();
                inputNumber.pop();

                phoneNumberHolder.pop();
                phoneNumberHolder.pop();

                errorMessages.push(`Въведете първо информация за телефонен номер 2`);
                break;
            } else if (
              phoneNumberHolder.length != inputNumber.length || 
              phoneNumberHolder[i] == "" || 
              inputNumber[i] == "" || 
              inputNumber[i].length < 6
            ) {
                isValid = false;
                if (selectedContactIndex !== undefined){
                    errorMessages.push(`Няма въведена информация за Телефонен номер "${selectedContactIndex + 1}"`);
                } else {
                    errorMessages.push(`Няма въведена информация за Телефонен номер "${i + 1}"`);
                }
                break;
              }

            const parsedPhoneNumber = phoneUtil.parseAndKeepRawInput(inputNumber[i], 'BG');

            if (!phoneUtil.isValidNumber(parsedPhoneNumber)) {
                isValid = false;
                errorMessages.push(`Въведеният телефонен номер "${i + 1}" е неправилен`);
            }
        }

        if (errorMessages.length > 0) {
            const errorMessage = errorMessages.join('\n');
            Alert.alert(errorMessage);
        } else if (isValid) {
            // Check for duplicate phone numbers
            if (new Set(inputNumber).size !== inputNumber.length) {
                errorMessages.push('Телефонните номера не могат да бъдат еднакви');
            }

            // Check for duplicate phone number holders
            if (new Set(phoneNumberHolder).size !== phoneNumberHolder.length) {
                errorMessages.push('Притежателите не могат да имат еднакви имена');
            }

            if (errorMessages.length > 0) {
                const errorMessage = errorMessages.join('\n');
                Alert.alert(errorMessage);
            } else {
                try {
                    // Store encrypted numbers and phone number holders in AsyncStorage
                    await AsyncStorage.setItem('@number', JSON.stringify(encryptedNumbers));
                    await AsyncStorage.setItem('@name', JSON.stringify(phoneNumberHolder));
                } catch (e) {
                    console.log(e);
                }

                handleButtonPress(screenNumber = 1);
            }
        }
    };

    return (
        <View style={styles.container}>
            <BackButton onPress={() => handleButtonPress(screenNum = 0)} />

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Добавете телефонен номер по подразбиране
                </Text>

                <Text style={styles.secondaryText}>
                    Броят на полетата за въвеждане се променя в зависимост от избора на потребителя
                </Text>
            </View>

            {selectedContactIndex !== undefined ? (
                <View style={styles.cardContainer} key={selectedContactIndex}>
                    <View key={selectedContactIndex} style={styles.card}>
                        <Text style={styles.cardText}>
                            Телефонен номер {selectedContactIndex + 1}:
                        </Text>

                        <View style={styles.inputContainer}>
                            <TextInput
                                keyboardType="default"
                                maxLength={10}
                                onChangeText={(value) => handlePhoneNumberHolderChange(selectedContactIndex, value)}
                                placeholder="Име на притежателя"
                                value={phoneNumberHolder[selectedContactIndex]}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <IntlPhoneInput
                                defaultValue={inputNumber[selectedContactIndex]}
                                defaultCountry="BG"
                                disableCountryChange={true}
                                flagStyle={{ display: 'none' }}
                                placeholder="Въведете номер тук"
                                onChangeText={(value) => handlePhoneInputChange(selectedContactIndex, value)}
                            />
                        </View>
                    </View>
                </View>
            ) : (
                inputNumber.map((number, index) => (
                    <View style={styles.cardContainer} key={index}>
                        <View key={index} style={styles.card}>
                            <Text style={styles.cardText}>
                                Телефонен номер {index + 1}:
                            </Text>

                            <View style={styles.inputContainer}>
                                <TextInput
                                    keyboardType="default"
                                      maxLength={10}
                                      onChangeText={(value) => handlePhoneNumberHolderChange(index, value)}
                                      placeholder="Име на притежателя"
                                      value={phoneNumberHolder[index]}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <IntlPhoneInput
                                    defaultValue={number}
                                    defaultCountry="BG"
                                    disableCountryChange={true}
                                    flagStyle={{ display: 'none' }}
                                    placeholder="Въведете номер тук"
                                    onChangeText={(value) => handlePhoneInputChange(index, value)}
                                />
                            </View>
                        </View>
                    </View>
                ))
            )}

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={saveNumbers}>
                    <Text style={styles.buttonText}>Запази</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PhoneNumberEntryScreen;