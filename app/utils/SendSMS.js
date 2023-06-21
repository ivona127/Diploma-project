import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SMS from 'expo-sms';
import GetDefaultNumbers from './GetDefaultNumbers';

const SendSMS = (props) => {
    const navigation = useNavigation();

    const {phoneNumbers, phoneHolders } = new GetDefaultNumbers();

    const returnToHomeScreen = () => {
        navigation.navigate('BottomTabNavigator');
    };

    const sendSms = async (number, message) => {
        await SMS.sendSMSAsync([number], message);
        returnToHomeScreen();
    };

    useEffect(() => {
        const sendSMSMessages = async () => {
            const lat = props.latitude;
            const long = props.longitude;
            const url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;

            for (let i = 0; i < phoneNumbers.length; i++) {
                const number = phoneNumbers[i];   
                const result = `${phoneHolders[i]}, имам нужда от спешна медицинска помощ.\nВреме: ${props.time}\nЛокация:\n${url}`;
                
                if (number) {
                    await sendSms(number, result);
                }
            }
        };
    
        sendSMSMessages();
        
    }, [phoneHolders]);
};

export default SendSMS;