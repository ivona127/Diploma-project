import { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import StopWatch from '../StopWatch';
import EventButton from './EventButton';
import CurrentLocation from '../CurrentLocation';
import CurrentTime from '../CurrentTime';
import { useNavigation } from '@react-navigation/native';
import SendSMS from '../SendSMS';

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
                < EventButton iconName='heartbeat' iconFont='FontAwesome' buttonText='Heart disease' onPress={handleButtonPress}/>
                < EventButton iconName='user-injured' iconFont='FontAwesome5' buttonText='Injury' onPress={handleButtonPress} />
            </View>

            <View style={styles.row}>
                < EventButton iconName='human-pregnant' iconFont='MaterialCommunityIconsfrom' buttonText='Childbirth' onPress={handleButtonPress} />
                < EventButton iconName='child-care' iconFont='MaterialIcons' buttonText='Childhood illness' onPress={handleButtonPress}/>
            </View>

            <View style={styles.row}>
                < EventButton iconName='head-remove-outline' iconFont='MaterialCommunityIconsfrom' buttonText='Loss of consciousness' onPress={handleButtonPress}/>
                < EventButton iconName='glass-whiskey' iconFont='FontAwesome5' buttonText='Poisoning' onPress={handleButtonPress}/>
            </View>
            {isButtonClicked==false && stopWatch==true && <SendSMS time={time} longitude={longitude} latitude={latitude}/>}
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f2f2f2',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    row: {
        flexDirection:'row',
    }
    
});

export default EmergencyEventsMenu;
