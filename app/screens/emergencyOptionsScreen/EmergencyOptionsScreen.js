import {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CurrentLocation from '../../utils/CurrentLocation';
import CurrentTime from '../../utils/CurrentTime';
import HealthIssueButton from '../../components/healthIssueButton/HealthIssueButton';
import SendSMS from '../../utils/SendSMS';
import Stopwatch from '../../utils/Stopwatch';

import styles from './EmergencyOptionsScreenStyles';

const EmergencyOptionsScreen = () => {
    const navigation = useNavigation();

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const {latitude, longitude} = CurrentLocation();
    const stopwatch = Stopwatch();
    const time = CurrentTime();

    const handleButtonPress = (caseNum) => {
        setIsButtonClicked(true);
        navigation.navigate('HospitalListScreen', {caseNum: caseNum});
    };

    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.textContainer}>
                <Text style={styles.primaryText}>
                    Изберете вида на спешния случай
                </Text>

                <Text style={styles.secondaryText}>
                    След 20 секунди, ако не бъде избрана опция, 
                    автоматично ще бъде изпратено времето и местоположението 
                    Ви до номерата, въведени в настройките на приложението от Вас
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <HealthIssueButton 
                    iconName='allergies' 
                    iconFont='FontAwesome5' 
                    buttonText='Алергия' 
                    onPress={() => handleButtonPress(1)}
                />

                <HealthIssueButton 
                    iconName='child-care' 
                    iconFont='MaterialIcons' 
                    buttonText='Детско заболяване' 
                    onPress={() => handleButtonPress(2)}
                />
                
                <HealthIssueButton 
                    iconName='syringe' 
                    iconFont='FontAwesome5' 
                    buttonText='Диабет' 
                    onPress={() => handleButtonPress(3)}
                />

                <HealthIssueButton 
                    iconName='head-remove-outline' 
                    iconFont='MaterialCommunityIconsfrom' 
                    buttonText='Загуба на съзнание' 
                    onPress={() => handleButtonPress(4)}
                />

                <HealthIssueButton 
                    iconName='diagnoses' 
                    iconFont='FontAwesome5' 
                    buttonText='Изгаряне' 
                    onPress={() => handleButtonPress(5)}
                />
                
                <HealthIssueButton 
                    iconName='user-injured' 
                    iconFont='FontAwesome5' 
                    buttonText='Нараняване' 
                    onPress={() => handleButtonPress(6)} 
                />

                <HealthIssueButton 
                    iconName='glass-whiskey' 
                    iconFont='FontAwesome5' 
                    buttonText='Натравяне' 
                    onPress={() => handleButtonPress(7)}
                />
                
                <HealthIssueButton 
                    iconName='baby' 
                    iconFont='FontAwesome5' 
                    buttonText='Раждане' 
                    onPress={() => handleButtonPress(8)} 
                />

                <HealthIssueButton 
                    iconName='heartbeat' 
                    iconFont='FontAwesome' 
                    buttonText='Сърдечни заболявания' 
                    onPress={() => handleButtonPress(9)}
                />

                <HealthIssueButton 
                    iconName='bug' 
                    iconFont='FontAwesome' 
                    buttonText='Ухапване' 
                    onPress={() => handleButtonPress(10)}
                />
            </View>
            
            {isButtonClicked==false && stopwatch==true && <SendSMS time={time} latitude={latitude} longitude={longitude}/>} 
        </ScrollView>
    );
}

export default EmergencyOptionsScreen;