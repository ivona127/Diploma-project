import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        width: metrics.width,
        height: metrics.height,
    },

    iconButton:{
        position: 'absolute',
        top: 0,
        marginLeft: 10,
        marginTop: 40
    },

    icon:{
        color: colors.primary,
        fontSize: fonts.size.font25,
        fontWeight: fonts.weight.bold
    },

    textContainer:{
        alignItems:'center',
        top: metrics.height / 12
    },

    flatListContainer:{
        alignItems:'center',
        height: metrics.height / 1.7,
        top: metrics.height / 9,
    },

    firstAidButtonContainer:{
        alignItems:'center',
        position: 'absolute', 
        bottom: 0,
        left: 0, 
        right: 0, 
    },

    firstAidButton:{
        color: colors.primary, 
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderRadius: 50,
        borderWidth: 5,
        elevation:10,
        height: metrics.height / 10,
        width: metrics.width / 1.2,
        justifyContent: 'center',
        marginBottom:15,
    },

    firstAidButtonText:{
        color: colors.primary,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font14,
        fontWeight: fonts.weight.bold,
        textAlign: 'center',
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