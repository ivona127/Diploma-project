import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        padding: 10,       
        width: metrics.width * 0.95
    },

    buttonsContainer:{
        flexDirection: 'row',
        marginRight: 10,
    },

    iconContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5
    },

    textContainer:{
        justifyContent: 'center',
        width: metrics.width * 0.5,
    },

    button:{
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        margin: 10
    },

    icon:{
        color: colors.white,
        fontSize: fonts.size.font25
    }, 
  
    lottie:{
        height: metrics.height * 0.08,
        position: 'absolute',
        resizeMode: 'cover',    
        width: metrics.width * 0.15
    },

    hospitalName:{
        color: colors.text,
        fontSize: fonts.size.font15,
        fontWeight: fonts.weight.normal,
        fontFamily: fonts.type.roboto,
        marginLeft: 20
    }
});

export default styles;