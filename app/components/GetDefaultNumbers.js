import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetDefaultNumbers = () => {
    const [phoneNumbers, setPhoneNumbers] = useState(Array(3).fill(''));

    useEffect(() => {
        const fetchData = async () => {
          try {
            const number = await AsyncStorage.getItem('@number');
            console.log(number);
            if (number !== null) {
                const parts = number.split(/[^\d]+/);
                const part1 = parts[2];
                const part2 = parts[1];
                const part3 = parts[0];
                setPhoneNumbers([part1, part2, part3]);
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    return phoneNumbers
};

export default GetDefaultNumbers;