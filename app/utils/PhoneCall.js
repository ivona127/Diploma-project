import PhoneCall from 'react-native-phone-call';

const makeCall = (phoneNumber) => {
    const args = {
        number: phoneNumber,
        prompt: false, // Whether to prompt the user to send the SMS or not (in this case, it's set to false)
    };

    PhoneCall(args).catch(console.error);

    return makeCall;
};

export default makeCall;