// import {Text, View, StyleSheet} from 'react-native';
// import {COLORS} from '../theme/Colors'

// const LossOfConsciousness = () => {
//     const firstAid = [
//         {
//             id:1,
//             note: 'ВНИМАНИЕ! Преди да престите пострадалия, първо се уверете, че няма травми на гръбначния стълб!' ,
//             step1: '1. Обадете се незабавно на 112',
//             step2: '2. Калинечете отстрани на пострадалия и се уверете, че двата му крака са успередни един с друг.',
//             step3: '3. Поставете близката му към Вас ръка под прав ъгъл спрямо тялото му със сгънат под прав ъгъл лям лакът, като дланта е обърната нагоре.',
//             step4: '4. Сгънете срещуположния на Вас крак като придържате ходилото опряно в земята.',
//             step5: '5. Поставете другата ръка на подстрадалия пред гърдите му и долепете горната част на дланта плътно до близката до Вас негова буза.',
//             step6: '6. Като държите пострадалия за тази ръка и за ханша, внимателно го преобърнете към Вас като не забравяте да придвижите главата назад в посока към тила, за да осигурите проходимост на дихателните пътища.',
//             step7: '7. Нагласете горестоящия му крак така, че в таза и в коляното да се образуват прави ъгли.',
//             step8: '8. Завийте пострадалия.'
//         }
//     ]

//     return (
//         <View style={styles.container}>
//             <View style={styles.text_container}>
//                     <Text style={styles.text}>
//                         {firstAid[0].note}
//                     </Text>
//                 </View>

//             <View style={styles.container2}>
//                 <View style={styles.item}>
//                     <Text>
//                         {firstAid[0].step1}
//                     </Text>
//                 </View>

//                 <View style={styles.item}>
//                     <Text>
//                         {firstAid[0].step2}
//                     </Text>
//                 </View>

//                 <View style={styles.item}>
//                     <Text>
//                         {firstAid[0].step3}
//                     </Text>
//                 </View>

//                 <View style={styles.item}>
//                     <Text>
//                         {firstAid[0].step3}
//                     </Text>
//                 </View>

//                 <View style={styles.item}>
//                     <Text>
//                         {firstAid[0].step4}
//                     </Text>
//                 </View>

//                 <View style={styles.item}>
//                     <Text>
//                         {firstAid[0].step5}
//                     </Text>
//                 </View>

//                 <View style={styles.item}>
//                     <Text>
//                         {firstAid[0].step6}
//                     </Text>
//                 </View>

//                 <View style={styles.item}>
//                     <Text>
//                         {firstAid[0].step7}
//                     </Text>
//                 </View>

//                 <View style={styles.item}>
//                     <Text>
//                         {firstAid[0].step8}
//                     </Text>
//                 </View>
            
//             </View>
//         </View> 
//     );
// }

// const styles = StyleSheet.create({
//     container:{
//         backgroundColor: COLORS.grey,
//         flex:1,
//         margin:10,
//     }, 

//     item: {  
//         padding: 20,
//         // marginVertical: 8,
//         // marginHorizontal: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: COLORS.black,
//     },

//     container2:{
//         borderRadius: 10,
//         backgroundColor: COLORS.white,
//         elevation: 10,
//          // marginVertical: 8,  
//     },

//     text_container:{
//         alignItems:'center',
//         marginTop:30,
//         marginBottom:20
//     },

//     text:{
//         color: COLORS.red,
//         fontFamily:'Roboto',
//         fontSize:20,
//         fontWeight: 'bold',
//     },
// });

// export default LossOfConsciousness;