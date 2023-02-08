import { View, Text, StyleSheet } from 'react-native';
import {COLORS} from '../const/colors'

const FirstAid = () => {
    return(
        <View>
            <Text>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:COLORS.grey
    },
});

export default FirstAid;