import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetDefaultNumbers = () => {
    const [phoneNumbers, setPhoneNumbers] = useState(Array(3).fill(''));

    useEffect( () => {
        const fetchData = async () => {
            try {
                const rawData = await AsyncStorage.getItem('@number');
    
                if (rawData != null) {
                    const parts = rawData.match(/(\+[\d]+)/g).filter(Boolean);
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