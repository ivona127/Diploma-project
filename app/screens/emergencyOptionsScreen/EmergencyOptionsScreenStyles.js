import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        flex: 1,
        height: metrics.height,
        width: metrics.width
    },

    buttonsContainer:{
        alignItems:'center',    
        top: metrics.height / 11,
    },

    contentContainerStyle: {
        minHeight: metrics.height + 300
    },

    textContainer:{
        alignItems:'center',
        top: metrics.height / 16
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
        fontSize: fonts.size.font14,
        fontWeight: fonts.weight.normal,
        marginTop: 5    
    },
});

export default styles;