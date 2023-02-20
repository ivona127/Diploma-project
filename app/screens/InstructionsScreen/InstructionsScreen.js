import {FlatList, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {firstAid} from '../../data/FirstAid';
import BackButton from '../../components/backButton/BackButton';
import TextField from '../../components/textField/TextField';

import styles from './InstructionsScreenStyles';

const InstructionsScreen = ({route}) =>{
    const navigation = useNavigation();

    const caseNum =  route.params.caseNum;
    const instructions = firstAid.filter(item => item.id === caseNum);


    const handleButtonPress = () => {
        navigation.navigate('HospitalListScreen', {caseNum: caseNum});
    }

    return (
        <View style={styles.container}>
            <BackButton onPress={() => handleButtonPress()}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {instructions[0].title}
                </Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={instructions[0].image} />
            </View>

            <View style={styles.instructionsContainer}>
               <FlatList
                    data={instructions}
                    keyExtractor={item => item.description.length + item.steps[0].text.length}
                    renderItem={({item}) => { 
                        return <>
                            <View style={styles.secondaryTextContainer}>
                                <Text style={styles.secondaryText}>
                                    Стъпки при {item.description}:
                                </Text>
                            </View>
                            
                            <View style={{alignItems:'center'}}>
                                {item.steps.map((step, index) => (
                                    <View key={step.text.length}>
                                        <TextField              
                                            number={index} 
                                            text={step.text} 
                                        />
                                    </View>
                                ))}
                            </View>
                        </>
                    }}
                />
            </View>
        </View>
    );
};

export default InstructionsScreen;