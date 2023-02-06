import { useState, useEffect } from 'react';
import * as SMS from 'expo-sms';
import GetDefaultNumbers from '../components/GetDefaultNumbers';

const SendSMS = (props) => {
    const [message, setMessage] = useState(null);
    const phoneNumbers = new GetDefaultNumbers();

    const sendSms = async (number) => {
        try {
          await SMS.sendSMSAsync([number], message);
        } catch (error) {
          console.log(error);
        }
    };

    const createSMSMessage = async () =>{
        const lat = props.latitude;
        const long = props.longitude;
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
        const result = 'Time: ' + props.time + '\n' + 'Location:\n' +  url;
        setMessage(result);

        for (const number of phoneNumbers) {
            if (number) {
              await sendSms(number);
            }
        }
        
    }

    useEffect(() => {
        createSMSMessage();
        console.log(message);
    });
}

export default SendSMS;
