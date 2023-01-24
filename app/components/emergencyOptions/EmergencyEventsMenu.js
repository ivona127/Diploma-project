import { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import StopWatch from '../StopWatch';
import EventButton from './EventButton';
import CurrentLocation from '../CurrentLocation';
import CurrentTime from '../CurrentTime';
import { useNavigation } from '@react-navigation/native';
import SendSMS from '../SendSMS';
import {COLORS} from '../../const/colors';

const EmergencyEventsMenu = () => {
    const navigation = useNavigation();
    const {longitude, latitude} = CurrentLocation();
    const time = CurrentTime();
    const stopWatch = StopWatch();

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonPress = () => {
        setIsButtonClicked(true);
        navigation.navigate('Main');
    };

    return(
        <View style={styles.container}>

            <View style={styles.row}>
                < EventButton iconName='heartbeat' iconFont='FontAwesome' buttonText='Сърдечни заболявания' onPress={handleButtonPress}/>
                < EventButton iconName='user-injured' iconFont='FontAwesome5' buttonText='Нараняване' onPress={handleButtonPress} />
            </View>

            <View style={styles.row}>
                < EventButton iconName='human-pregnant' iconFont='MaterialCommunityIconsfrom' buttonText='Раждане' onPress={handleButtonPress} />
                < EventButton iconName='child-care' iconFont='MaterialIcons' buttonText='Детско заболяване' onPress={handleButtonPress}/>
            </View>

            <View style={styles.row}>
                < EventButton iconName='head-remove-outline' iconFont='MaterialCommunityIconsfrom' buttonText='Загуба на съзнание' onPress={handleButtonPress}/>
                < EventButton iconName='glass-whiskey' iconFont='FontAwesome5' buttonText='Натравяне' onPress={handleButtonPress}/>
            </View>
            {isButtonClicked==false && stopWatch==true && <SendSMS time={time} longitude={longitude} latitude={latitude}/>}
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    row: {
        flexDirection:'row',
    }
    
});

export default EmergencyEventsMenu;
