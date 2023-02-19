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

    firstAidButtonContainer:{
        alignItems:'center',
        bottom: 0,
        left: 0, 
        position: 'absolute', 
        right: 0 
    },

    flatListContainer:{
        alignItems:'center',
        height: metrics.height / 1.9,
        top: metrics.height / 9,
    },

    textContainer:{
        alignItems:'center',
        top: metrics.height / 12
    },

    firstAidButton:{
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderRadius: 50,
        borderWidth: 5,
        color: colors.primary, 
        elevation:10,
        height: metrics.height / 10,
        justifyContent: 'center',
        marginBottom:15,
        width: metrics.width / 1.2
    },

    firstAidButtonText:{
        color: colors.primary,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font14,
        fontWeight: fonts.weight.bold,
        textAlign: 'center'
    },

    primaryText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font19,
        fontWeight: fonts.weight.bold,
    },
  
    secondaryText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font15,
        fontWeight: fonts.weight.normal, 
        marginTop: 10,
        width: metrics.width / 1.1,
    }
});

export default styles;