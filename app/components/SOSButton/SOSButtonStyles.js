import { StyleSheet } from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent:'center'
    },

    text: {
        color: colors.white,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font35,
        fontWeight: fonts.weight.bold,
    },

    lottieContainer:{
        position: 'absolute',
    },

    lottie: {
        height: metrics.height / 3,
        width: metrics.width / 1.5,
        resizeMode: 'cover'    
    }
});

export default styles;