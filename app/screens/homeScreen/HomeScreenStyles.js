import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        height: metrics.height,
        width: metrics.width
    },
    
    bottomTextContainer:{
        alignItems: 'center',
        top: metrics.height / 2.15,
    },

    emergencyPhonesContainer:{
        flexDirection: 'row',
        height: '10%',
        justifyContent: 'space-evenly',
        top: metrics.height / 6.5
    },

    redButtonContainer :{
        alignItems: 'center',
        top: metrics.height / 3.25,
    },

    topTextContainer:{
        alignItems: 'center',
        top: metrics.height / 9.5,
    },

    primaryText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font19,
        fontWeight: fonts.weight.bold 
    },

    secondaryText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font15,
        fontWeight: fonts.weight.normal, 
        marginTop: 5
    }
});

export default styles;