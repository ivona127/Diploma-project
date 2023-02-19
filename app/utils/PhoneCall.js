import PhoneCall from 'react-native-phone-call';

const makeCall = (phoneNumber) => {
    const args = {
        number: phoneNumber,
        prompt: false,
    };

    PhoneCall(args).catch(console.error);

    return makeCall;
};

export default makeCall;