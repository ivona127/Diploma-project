// import { useState } from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
// import PhoneInput from 'react-native-phone-number-input';
// import PhoneNumber from 'google-libphonenumber'
// import { COLORS } from '../const/colors';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const PhoneNumberEntryScreen = ({route}) =>{
//     const pickerNumber = route.params.pickerNumber;
//     const [inputNumber, setInputNumber] = useState(Array(pickerNumber).fill(''));
//     const phoneUtil = PhoneNumber.PhoneNumberUtil.getInstance();
//     const navigation = useNavigation();

//     const handlePhoneInputChange = (index, value) => {
//         const updatedNumbers = [...inputNumber];
//         updatedNumbers[index] = value;
//         setInputNumber(updatedNumbers);
//     }

//     const handleButtonPress = () => {
//         navigation.navigate('LocationPermissionScreen');
//     }

//     const saveNumbers = async() => {
//         let isValid = true;
//         for(let i = 0; i < pickerNumber; i++) {
//             const phonenumber = phoneUtil.parseAndKeepRawInput(inputNumber[i], 'BG');
//             if (!phoneUtil.isValidNumber(phonenumber)) {
//                 isValid = false;
//                 Alert.alert("Въведеният телефонен номер " + (i + 1) + " е неправилен");
//             }
//         }

//         if(isValid) {
//             //save the numbers to async storage
//             try {
//                 await AsyncStorage.setItem('@number', JSON.stringify(inputNumber));
//             } catch (e) {
//                 console.log(e);
//             }
//             handleButtonPress();
//         }
//     };

//     return(
//         <View style={styles.container}>
//             <View style={styles.title_container}>
//                 <Text style={styles.title}>Добавете телефонен номер по подразбиране:</Text>
//             </View>
//                 {inputNumber.map((number, index) => (
//                     <View  key={index} style={styles.card}>
//                         <Text style={styles.text}>Телефонен номер {index + 1}:</Text>
//                         <View style={styles.input_container}>
//                             <PhoneInput
//                                 defaultValue = {number}
//                                 defaultCode='BG'
//                                 withShadow
//                                 placeholder= 'Въведете номер тук'
//                                 onChangeFormattedText={value => handlePhoneInputChange(index, value)}
//                             />
//                         </View>
//                     </View>
//                 ))}
//             <TouchableOpacity style={styles.button} onPress = {saveNumbers}>
//                 <Text style={styles.button_text}>Запази</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: COLORS.grey
//     },

//     input_container:{
//         justifyContent:'center', 
//         alignItems:'center',
//         elevation:2,
//         backgroundColor: COLORS.grey
//     }, 

//     card:{
//         padding:30,
//         marginTop:20,
//         height: 'auto',
//         width: '85%',
//         borderRadius:20,
//         backgroundColor: COLORS.white,
//         elevation:10   
//     },

//     title:{
//         color: COLORS.black,
//         fontSize:17,
//         fontFamily: 'Roboto',
//     },

//     title_container:{
//         marginBottom:10,
//         paddingLeft:20,
//         paddingRight:20,
//     },

//     text:{
//         color: COLORS.red,
//         fontFamily:'Roboto',
//         fontWeight: 'bold',
//         fontSize:15,
//         marginBottom:10
//     },

//     button:{
//         width: '50%',
//         height: '8%',
//         margin: 40,
//         borderRadius:20,
//         elevation: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor:COLORS.red,
//     },

//     button_text:{
//         color: COLORS.white,
//         fontWeight:'bold',
//         fontFamily: 'Roboto',
//         fontSize: 25,
//     }
// })

// export default PhoneNumberEntryScreen;