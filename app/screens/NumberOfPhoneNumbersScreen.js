// import { useState} from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { COLORS } from '../const/colors';
// import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';

// const NumberOfPhoneNumbersScreen = () =>{
//     const [showButton, setShowButton] = useState(false);
//     const [pickerNumber, setPickerNumber] = useState(1);

//     const navigation = useNavigation();

//     const handlePickerChange = (itemValue) => {
//         setPickerNumber(itemValue);
//         setShowButton(true);
//     }

//     const handleButtonPress = () => {
//         navigation.navigate('PhoneNumberEntryScreen', {pickerNumber: pickerNumber});
//     }

//     return(
//         <View style={styles.container}>
//             <View style={styles.title_container}>
//                 <Text style={styles.title}>
//                     При спешеност ще бъдат изпратени 
//                     съобщения с молба за помощ до 
//                     посочените номера
//                 </Text>
//             </View>
//             <View style={styles.card}>
//                 <Text style={styles.text}>Изберeте броя телефонни номера за въвеждане:</Text>
//                 <View style={styles.picker_container}>
//                     <Picker
//                         selectedValue={pickerNumber}
//                         style={styles.picker}
//                         onValueChange={handlePickerChange}
//                         >
//                         <Picker.Item label="1" value={1} />
//                         <Picker.Item label="2" value={2} />
//                         <Picker.Item label="3" value={3} />
//                     </Picker>
//                 </View>
//             </View>
            
//             <TouchableOpacity style={styles.button}>
//                 <Text style={styles.button_text} onPress={() => handleButtonPress()}>Напред</Text>
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

//     card:{
//         padding:30,
//         marginBottom:30,
//         marginTop:10,
//         height: 'auto',
//         width: '85%',
//         borderRadius:20,
//         backgroundColor: COLORS.white,
//         alignItems: 'center',
//         elevation:10   
//     },

//     picker_container:{
//         borderWidth: 0.5,
//         borderColor: COLORS.black,
//         elevation:1,
//         marginTop:40,
//         marginBottom:10
//     },
   
//     picker:{
//         height: 30, 
//         width: 150,
//         color: COLORS.black    
//     },

//     text:{
//         color: COLORS.red,
//         fontWeight: 'bold',
//         fontFamily:'Roboto',
//         fontSize:20,    
//     },

//     button:{
//         width: '50%',
//         height: '8%',
//         marginTop: 50,
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
//     },

//     title:{
//         color: COLORS.black,
//         fontSize:17,
//         fontFamily: 'Roboto',
//         // fontWeight: 'bold',
//     },

//     title_container:{
//         marginBottom:30,
//         paddingLeft:25,
//         paddingRight:25,
//     }
// })

// export default NumberOfPhoneNumbersScreen;