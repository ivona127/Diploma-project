import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {hospitals} from '../../data/Hospitals'
import HospitalDataField from '../../components/hospitalDataField/HospitalDataField';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './HospitalListScreenStyles';

const HospitalListScreen = ({route}) =>{
    const navigation = useNavigation();

    const caseNum = route.params.caseNum;
    const filteredHospitals = hospitals.filter(hospital => hospital.cases.includes(caseNum));

    const handleButtonPress = (screenNum) => {
        if(screenNum){
            navigation.navigate('AllergyInstructionScreen');
        } 
        else {
            navigation.navigate('BottomTabNavigator');        
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton} onPress={() => handleButtonPress(screenNum=0)}>
                <AntDesign 
                    name='arrowleft' 
                    style={styles.icon} 
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.primaryText}>
                    Списък на здравните заведение, отговарящи на посочения здравословен проблем
                </Text>

                <Text style={styles.secondaryText}>
                    Предоставяне на възможност за директна навигация и позвъняване до съответното лечебно заведение
                </Text>
            </View>

            <View style={styles.flatListContainer}>
                <FlatList
                    data={filteredHospitals}
                    renderItem={({item}) => <HospitalDataField item={item} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.contentContainerStyle}
                />
            </View>

            <View style={styles.firstAidButtonContainer}>
                <TouchableOpacity style={styles.firstAidButton} onPress={() => handleButtonPress(screenNum=1)}>
                        <Text style={styles.firstAidButtonText}>
                            инструкция за оказване на първа долекарска помощ
                        </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default HospitalListScreen;