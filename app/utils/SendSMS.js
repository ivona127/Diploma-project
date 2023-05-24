import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SMS from 'expo-sms';
import GetDefaultNumbers from './GetDefaultNumbers';

const SendSMS = (props) => {
    const navigation = useNavigation();

    const [message, setMessage] = useState(null);
    const { phoneNumbers, phoneHolders } = new GetDefaultNumbers();
    const [counter, setCounter] = useState(0);

    const returnToHomeScreen = () => {
        navigation.navigate('BottomTabNavigator');
    };

    const sendSms = async (number) => {
        await SMS.sendSMSAsync([number], message);
        returnToHomeScreen();
    };

    const createSMSMessage = async () => {
        const lat = props.latitude;
        const long = props.longitude;
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;

        const result = `${phoneHolders[counter]}, имам нужда от спешна медицинска помощ.\nВреме: ${props.time}\nЛокация:\n${url}`;
        setMessage(result);
    };

    useEffect(() => {
        // This effect is triggered whenever phoneHolders array changes
        if (phoneHolders.some((holder) => holder !== '')) {
            createSMSMessage();
        }
    }, [phoneHolders]);

    useEffect(() => {
        const sendSMSMessages = async () => {
            for (const number of phoneNumbers) {
                if (number) {
                    // If the number exists, send an SMS and increment the counter
                    await sendSms(number);
                    setCounter((prevCounter) => prevCounter + 1);
                }
            }
        };

        if (message) {
            // If a message exists, send SMS messages
            sendSMSMessages();
        }
    }, [message]);
};

export default SendSMS;