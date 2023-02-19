import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {hospitals} from '../../data/Hospitals'
import BackButton from '../../components/backButton/BackButton';
import HospitalDataField from '../../components/hospitalDataField/HospitalDataField';

import styles from './HospitalListScreenStyles';

const HospitalListScreen = ({route}) =>{
    const navigation = useNavigation();

    const caseNum = route.params.caseNum;
    const filteredHospitals = hospitals.filter(hospital => hospital.cases.includes(caseNum));

    const handleButtonPress = (screenNum) => {      
        if(screenNum){
            navigation.navigate('InstructionsScreen', {caseNum: caseNum});
        } 
        else {
            navigation.navigate('BottomTabNavigator');        
        }
    }

    return (
        <View style={styles.container}>
            <BackButton onPress={() => handleButtonPress(screenNum=0)} />

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
                />
            </View>

            <View style={styles.firstAidButtonContainer}>
                <TouchableOpacity 
                    style={styles.firstAidButton} 
                    onPress={() => handleButtonPress(screenNum=1)}
                >
                        <Text style={styles.firstAidButtonText}>
                            ИНСТРУКЦИИ ЗА ОКАЗВАНЕ НА ПЪРВА ДОЛЕКАРСКА ПОМОЩ
                        </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HospitalListScreen;