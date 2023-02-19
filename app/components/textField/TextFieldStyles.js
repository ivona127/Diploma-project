import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container:{
        alignSelf: 'flex-start',
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 10,
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
        width: metrics.width /1.1
    },

    textContainer:{
        alignItems: 'center',
        flexDirection:'row',
        padding: 15,
    },

    text:{
        color: colors.primary,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font21,
        fontWeight: fonts.weight.bold
    },
    
    innerText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font14,
        fontWeight: fonts.weight.normal
    }
});

export default styles;
