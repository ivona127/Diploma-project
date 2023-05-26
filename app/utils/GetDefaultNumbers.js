import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'react-native-crypto-js';

const GetDefaultNumbers = () => {
    const secretKey = useSelector((state) => state.secretKey);
    const [phoneNumbers, setPhoneNumbers] = useState(Array(3).fill(''));
    const [phoneHolders, setPhoneHolders] = useState(Array(3).fill(''));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const encryptedNumbers = await AsyncStorage.getItem('@number');
                const phoneNumberHolders = await AsyncStorage.getItem('@name');

                if (encryptedNumbers !== null && phoneNumberHolders !== null) {
                    const decryptedNumbers = JSON.parse(encryptedNumbers).map((encryptedNumber) => {
                        const decryptedNumber = CryptoJS.AES.decrypt(encryptedNumber, secretKey).toString(CryptoJS.enc.Utf8);
                        return decryptedNumber;
                    });

                    const parts = decryptedNumbers ? decryptedNumbers.join('').match(/(\+[\d]+)/g).filter(Boolean) : [];
                    const result = parts ? parts.map(part => part.trim()) : [];

                    const savedNumbers = [...phoneNumbers];
                    const savedHolders = [...phoneHolders];

                    result.forEach((value, index) => {
                        savedNumbers[index] = value;
                    });

                    JSON.parse(phoneNumberHolders).forEach((holderName, index) => {
                        savedHolders[index] = holderName;
                    });

                    setPhoneNumbers(savedNumbers);
                    setPhoneHolders(savedHolders);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return { phoneNumbers, phoneHolders };
};

export default GetDefaultNumbers;
