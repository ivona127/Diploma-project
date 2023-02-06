import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SMS from 'expo-sms';
import GetDefaultNumbers from './GetDefaultNumbers';

const SendSMS = (props) => {
    const navigation = useNavigation();
    const [message, setMessage] = useState(null);
    const phoneNumbers = new GetDefaultNumbers();
    
    const returnToHomeScreen = () => {
        navigation.navigate('Tab');
    };

    const sendSms = async (number) => {
        await SMS.sendSMSAsync([number], message);
    
        returnToHomeScreen();
    };

    const createSMSMessage = async () =>{
        const lat = props.latitude;
        const long = props.longitude;
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
        const result = 'Time: ' + props.time + '\n' + 'Location:\n' +  url;
        setMessage(result);

        console.log(phoneNumbers);

        for (const number of phoneNumbers) {
            if (number) {
              await sendSms(number);
            }
        }
        
    }

    useEffect(() => {
        createSMSMessage();
        console.log(message);
    }, [phoneNumbers]);

}

export default SendSMS;
