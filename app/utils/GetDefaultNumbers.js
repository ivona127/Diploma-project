import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'react-native-crypto-js';

const GetDefaultNumbers = (props) => {
    const [phoneNumbers, setPhoneNumbers] = useState(Array(3).fill(''));

    useEffect( () => {
        const fetchData = async () => {
            try {
                
                const encryptedNumbers = await AsyncStorage.getItem('@number');

                if (encryptedNumbers !== null) {
                    const decryptedNumbers = JSON.parse(encryptedNumbers).map((encryptedNumber) => {
                    const decryptedNumber = CryptoJS.AES.decrypt(encryptedNumber, props.secretKey).toString(CryptoJS.enc.Utf8);
                    return decryptedNumber;
                });
    
                    const parts = decryptedNumbers.join('').match(/(\+[\d]+)/g).filter(Boolean);
                    const result = parts.map(part => part.trim());

                    const savedNumbers = [...phoneNumbers];

                    result.forEach((value, index) => {
                        savedNumbers[index] = value;
                    });
                    
                    setPhoneNumbers(savedNumbers);
                }
            } catch (error) {
              console.error(error);
            }
        }
        fetchData();
    }, []);

    return phoneNumbers
};

export default GetDefaultNumbers;