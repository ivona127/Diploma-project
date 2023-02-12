import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {hospitals} from '../../data/Hospitals'
import colors from '../../theme/Colors';
import makeCall from '../../components/PhoneCall';
import { useNavigation } from '@react-navigation/native';

const HospitalListScreen  = ({route}) =>{
  const navigation = useNavigation();
  const caseNum = route.params.caseNum;
  const filteredHospitals = hospitals.filter(hospital => hospital.cases.includes(caseNum));

  const navigateToEndPoint = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const handleButtonPress = () => {
    navigation.navigate('LossOfConsciousness');
  }

  const Item = ({item}) => ( 
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={{flexDirection:'row', marginTop:5, justifyContent:'space-around'}}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => makeCall(item.tel)}
        >
          <Feather name="phone-call" size={25} style={styles.icon}/>
          </TouchableOpacity>
            
          <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigateToEndPoint( item.latitude, item.longitude)}
          >
            <Feather name="navigation" size={25} style={styles.icon}/>
          </TouchableOpacity>
        </View>
          
      </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredHospitals}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />

        <TouchableOpacity 
            // style={styles}
            onPress={() => handleButtonPress()}
          >
            <Text>Бърза помощ</Text>
            {/* <Fontisto name="first-aid-alt" size={23} style={styles.icon}/> */}
          </TouchableOpacity>
          
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.background,
    flex:1
  },

  item: {
    borderRadius:10,
    backgroundColor: colors.white,
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
    backgroundColor: colors.primary,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  floatingButton:{
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 200,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },

  icon:{
    color: colors.white
  } 
});
  

export default HospitalListScreen;