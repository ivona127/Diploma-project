import { useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Switch} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../const/colors';
import PhoneInput from 'react-native-phone-number-input';
import PhoneNumber from 'google-libphonenumber'

const InputScreen = () => {
    const [inputNumber, setinputNumber] = useState([]);
    const [pickerNumber, setPickerNumber] = useState(1);
    const [number, setNumber] = useState(null);
    const [smsPermission, setSmsPermission] = useState(false);
    const [locationPermission, setLocationPermission] = useState(false);
    const phoneUtil = PhoneNumber.PhoneNumberUtil.getInstance();

    const saveNumber = () => {
        const phonenumber = phoneUtil.parseAndKeepRawInput(number, 'BG');      
        if (phoneUtil.isValidNumber(phonenumber)) {
            setisValidNumber(true);
            console.log(number);
            Alert.alert("valid number");
        } else {
            Alert.alert("Invalid number");
        }
    };

    const handlePickerChange = (itemValue) => {
        setPickerNumber(itemValue);
        setinputNumber(Array(itemValue).fill(''));
    }

    const handlePhoneInputChange = (index, value) => {
        const updatedNumbers = [...pickerNumber];
        updatedNumbers[index] = value;
        setinputNumber(updatedNumbers);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Няколко предварителни настройки: </Text>
                {/* <View style={{
                    backgroundColor:'white', 
                    width:"90%",
                    height:'auto',
                    borderRadius:20,
                    elevation:10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}> */}
                <View>
                    <Text>Избери броя на телефонния номер:</Text>
                    <Picker
                        selectedValue={pickerNumber}
                        style={{ height: 50, width: 100 }}
                        onValueChange={handlePickerChange}>
                        <Picker.Item label="1" value={1} />
                        <Picker.Item label="2" value={2} />
                        <Picker.Item label="3" value={3} />
                    </Picker>
                </View>
                        <View style={styles.card}>
                            <Text style={styles.text}>
                                Добавете телефонен номер по подразбиране:
                            </Text>
                            {inputNumber.map((number, index) => (
                            <View  key={index} style={{justifyContent:'center', alignItems:'center'}}>
                                <PhoneInput
                                    defaultValue = {number}
                                    defaultCode='BG'
                                    withShadow
                                    placeholder= 'Въведете номер тук'
                                    containerStyle={styles.phoneInput}
                                    onChangeFormattedText={
                                        value => handlePhoneInputChange(index, value)
                                    }
                                />
                            </View>
                        ))}
                    </View>
                    {/* <View style={styles.card}>
                        <Text style={styles.text}>Позволете на приложението да използва вашето местоположение:</Text>
                        <Switch
                            thumbColor='white'
                            trackColor={{ true: COLORS.red }}
                            value={locationPermission} 
                            onValueChange={(value) => setLocationPermission(value)}/>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.text}>Позволете на приложението да изпраща SMS при нужда:</Text>
                        <Switch 
                        thumbColor='white'
                        trackColor={{ true: COLORS.red }}
                        value={smsPermission} onValueChange={(value) => setSmsPermission(value)}/>
                    </View> */}

                    <TouchableOpacity 
                        style={styles.button}
                        onPress = {saveNumber}
                        >
                        <Text style={styles.text_button}>Запази</Text>
                    </TouchableOpacity>
                </View>
            // </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddcdc'
    },

    card: {
        padding: 20,
        margin: 10,
        height: 'auto',
        width: '90%',
        backgroundColor: COLORS.white,
        borderRadius:20,
        elevation:10,
        flexDirection:'column',      
    },

    phoneInput: {
        margin: 10,
        // width:'90%'
    },

    button:{
        width: '70%',
        height: '8%',
        borderRadius:20,
        backgroundColor:COLORS.red,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 10,
    },

    text:{
        color: '#474646',
        fontWeight:'bold',
        fontFamily: 'Roboto',
        fontSize: 15,
    },

    text_button:{
        color: COLORS.white,
        fontWeight:'bold',
        fontSize: 20,
    },

    title: {
        fontSize: 22,
        color: COLORS.red,
        fontWeight:'bold',
        marginBottom: 10,
    },

    location:{
        backgroundColor: 'white',
        borderRadius:2,
        width: 330,
        height: 100,
        elevation:10,
        justifyContent: 'center',
        alignItems: 'center',        
    }
})

export default InputScreen;