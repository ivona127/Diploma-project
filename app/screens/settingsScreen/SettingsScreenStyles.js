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

    mobilePhoneContainer:{
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 10,
        flexDirection: 'row',
        height: metrics.height / 8,
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 15, 
        width: metrics.width / 1.1,
    },

    mobilePhonesList:{
        alignItems: 'center',
        top: metrics.height / 6
    },

    textContainer:{
        alignItems:'center',
        top: metrics.height / 9,    
    },

    buttonText:{
        color: colors.white,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font15,
        fontWeight: fonts.weight.bold,
    },

    mobilePhoneText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font15,
        fontWeight: fonts.weight.normal,
    },

    editButton:{
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 20,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: metrics.width / 3.5,
        padding: 5
    },

    text:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font19,
        fontWeight: fonts.weight.bold,
    },

    secondaryText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font14,
        fontWeight: fonts.weight.normal,
        marginTop: 5,
        width: metrics.width / 1.2
    },

    labelText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font15,
        fontWeight: fonts.weight.bold,
    }
});

export default styles;