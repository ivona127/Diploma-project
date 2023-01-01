import { View, StyleSheet} from 'react-native';
import EventButton from './EventButton';

const EmergencyEventsMenu = () => {

    return(
        <View style={styles.container}>

            <View style={styles.row}>
                < EventButton iconName='heartbeat' iconFont='FontAwesome' buttonText='Heart disease'/>
                < EventButton iconName='user-injured' iconFont='FontAwesome5' buttonText='Injury'/>
            </View>

            <View style={styles.row}>
                < EventButton iconName='human-pregnant' iconFont='MaterialCommunityIconsfrom' buttonText='Childbirth'/>
                < EventButton iconName='child-care' iconFont='MaterialIcons' buttonText='Childhood illness'/>
            </View>

            <View style={styles.row}>
                < EventButton iconName='head-remove-outline' iconFont='MaterialCommunityIconsfrom' buttonText='Loss of consciousness'/>
                < EventButton iconName='glass-whiskey' iconFont='FontAwesome5' buttonText='Poisoning'/>
            </View>

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
