import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';


const styles = StyleSheet.create({
    emergencyPhoneButton:{
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: metrics.width / 2.5
    },

    emergencyPhoneButtonText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font19,
        fontWeight: fonts.weight.bold,
    },

    icon:{
        color: colors.primary,
        fontSize: fonts.size.font25,
        fontWeight: fonts.weight.bold
    }
});

export default styles;