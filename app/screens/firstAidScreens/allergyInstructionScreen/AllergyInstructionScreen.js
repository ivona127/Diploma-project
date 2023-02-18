import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './AllergyInstructionScreenStyles';

const AllergyInstructionScreen = () =>{
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('HospitalListScreen');        
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton} onPress={() => handleButtonPress()}>
                <AntDesign 
                    name='arrowleft' 
                    style={styles.icon} 
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Спешна помощ при алергии
                </Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../../assets/firstAidImages/allergy.jpg')} />
            </View>

            <View style={styles.instructionsContainer}>
                <Text>Стъпки:</Text>
                <View style={styles.card}>
                    <Text style={styles.text}>
                        1.  
                        <Text style={styles.innerText}> Позвънете незабавно на телефон 112.
                        </Text>
                    </Text>
                </View>
                <Text>2. Помогнете на пострадалия като го поставите да седне и го наклоните леко напред.</Text>
                <Text>3. Разговаряйте с него, успокойте го, докато пристигането на спешен медицински екип.</Text>
                <Text>4. Ако изподне пострадалия изпадне в шок, окажете първа помощ. Иструкции ще намери в опция "Безсъзнание"</Text>
            </View>
        </View>
    );
};

export default AllergyInstructionScreen;