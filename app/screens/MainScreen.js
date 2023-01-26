import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {hospitals} from '../data/Hospitals'
import call from 'react-native-phone-call';
import { COLORS } from '../const/colors';

const MainScreen = () =>{

  const navigateToEndPoint = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    console.log(latitude, longitude)
    // Linking.openURL(url);
  };

  const args = {
    number: '0886441624', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
    // skipCanOpen: true // Skip the canOpenURL check
  }
  
  const makeCall = () => {
    call(args).catch(console.error)
    // const phoneNumber = 'tel:0886441624';
    // Linking.openURL(phoneNumber).catch(err => console.log('Error:', err));
  }

  const Item = ({item}) => ( 
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={{flexDirection:'row', marginTop:5, justifyContent:'space-evenly'}}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => makeCall()}
        >
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
    <View style={styles.container}>
      <FlatList
        data={hospitals}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:COLORS.grey
  },

  item: {
    borderRadius:10,
    backgroundColor: COLORS.white,
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
    backgroundColor: COLORS.red,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon:{
    color: COLORS.white
  } 
});
  

export default MainScreen;