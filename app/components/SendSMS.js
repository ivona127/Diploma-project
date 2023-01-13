import { useState, useEffect } from 'react';
import * as SMS from 'expo-sms';

const SendSMS = (props) => {
    const [message, setMessage] = useState(null);

    const createSMSMessage =() =>{
        const lat = props.latitude;
        const long = props.longitude;
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
        const result = 'Time: ' + props.time + '\n' + 'Location:\n' +  url;
        setMessage(result);
        sendSms();
    }

    const sendSms = () => {
        SMS.sendSMSAsync(['0886441624'], message);
    };

    useEffect(() => {
        createSMSMessage();
        console.log(message);
    });
}

export default SendSMS;
