import {useState, useEffect} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import IntlPhoneInput from 'react-native-intl-phone-input';
import PhoneNumber from 'google-libphonenumber'

import BackButton from '../../components/backButton/BackButton';
import CryptoJS from 'react-native-crypto-js';

import styles from './PhoneNumberEntryScreenStyle';

const PhoneNumberEntryScreen = ({route}) =>{
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const pickerNumber = route.params.pickerNumber;
    const [inputNumber, setInputNumber] = useState(Array(pickerNumber).fill(''));
    const [secretKey, setSecretKey] = useState('');

    const phoneUtil = PhoneNumber.PhoneNumberUtil.getInstance();
      
    useEffect(() => {
        const newSecretKey = CryptoJS.lib.WordArray.random(16).toString();
        setSecretKey(newSecretKey);
        dispatch({ type: 'SET_SECRET_KEY', secretKey: newSecretKey });
    }, [dispatch]);


    const handleButtonPress = (screenNum) => {
        if(screenNum){
            navigation.navigate('LocationPermissionScreen');        
        } else {
            navigation.navigate('AmountOfPhoneNumbersScreen');
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
                    await AsyncStorage.setItem('@number', JSON.stringify(encryptedNumbers));
                } catch (e) {
                    console.log(e);
                }
    
                handleButtonPress(screenNum=1);
            }
        }
    };

    return(
        <View style={styles.container}>
            <BackButton onPress={() => handleButtonPress(screenNum=0)}/>

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
                            <IntlPhoneInput
                                defaultValue = {number}
                                defaultCountry="BG"
                                flagStyle={{display: 'none'}}
                                disableCountryChange={true}
                                placeholder="Въведете номер тук"
                                onChangeText ={value => handlePhoneInputChange(index, value)}
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