import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import { Linking } from 'react-native';

const MainScreen = () =>{
    const listHospitals = [
        {
            id: 1,
            name: 'МБАЛ "Света Анна',
            latitude: '42.66031653668624',
            longitude: '23.372026668408687'
        },

        {
            id: 2,
            name: 'МБАЛ "Царица Йоанна" (ИСУЛ)',
            latitude: '42.70075393951716',
            longitude: '23.3395660893195'
        },

        {
            id: 3,
            name: 'МБАЛСМ "Николай И. Пирогов',
            latitude: '42.69032852744321',
            longitude: '23.307414368409702'
        }
    ]

    const navigateToEndPoint = (latitude, longitude) => {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
      console.log(latitude, longitude)
      // Linking.openURL(url);
  };

    const Item = ({item}) => ( 
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={{flexDirection:'row', marginTop:5, justifyContent:'space-evenly'}}>
            <TouchableOpacity style={styles.button}>
                <Feather name="phone-call" size={25} style={styles.icon}/>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.button}
              onPress={ () => navigateToEndPoint( item.latitude, item.longitude)}
            >
              <Feather name="navigation" size={25} style={styles.icon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Fontisto name="first-aid-alt" size={23} style={styles.icon}/>
            </TouchableOpacity>
          
          </View>
          
        </View>
    );

    return (
        <View>
            <FlatList
                data={listHospitals}
                renderItem={({item}) => <Item item={item} />}
                keyExtractor={item => item.id}
           />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
      borderRadius:10,
      backgroundColor:'white',
      elevation:10,    
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },

    name: {
      fontSize: 19,
    },

    button:{
      width:50,
      height:50,
      borderRadius:30,
      backgroundColor: '#00cc44',
      margin:10,
      justifyContent: 'center',
      alignItems: 'center'
    },

    icon:{
      color:"white"
  } 
  });
  

export default MainScreen;