import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        width: metrics.width,
        height: metrics.height
    }, 

    textContainer:{
        alignItems:'center',
        top: metrics.height / 9,    
    },

    mobilePhonesList:{
        alignItems:'center',
        top: metrics.height / 6
    },

    mobilePhoneContainer:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:colors.white,
        borderRadius:10,
        height: metrics.height / 8,
        width: metrics.width / 1.1,
        elevation:10,
        marginBottom:20,
    },

    text:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font19,
        fontWeight: fonts.weight.bold,
    },

    secondaryText:{
        color: colors.text,
        fontFamily:fonts.type.roboto,
        fontSize: fonts.size.font14,
        fontWeight: fonts.weight.normal,
        marginTop:5,
        width: metrics.width / 1.1
    },

    mobilePhoneText:{
        color: colors.text,
        fontFamily:fonts.type.roboto,
        fontSize: fonts.size.font15,
        fontWeight: fonts.weight.bold,
    }
});

export default styles;