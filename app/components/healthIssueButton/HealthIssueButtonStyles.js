import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },

    iconContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
    },

    button:{
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.white,
        elevation: 10,
        flexDirection: 'row',
        height: metrics.height * 0.1,
        justifyContent:'space-between',
        width: metrics.width * 0.9
    },

    lottie:{
        height: metrics.height * 0.08,
        position: 'absolute',
        resizeMode: 'cover',
        width: metrics.width * 0.15
    },
    
    text:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font15,
        fontWeight: fonts.weight.bold,
        marginLeft: 20
    }, 

    icon:{
        color: colors.white,
        fontSize: fonts.size.font25    
    },
    
    arrow:{
        color: colors.primary,
        fontSize: fonts.size.font38,
        marginRight: 20    
    }
});

export default styles;