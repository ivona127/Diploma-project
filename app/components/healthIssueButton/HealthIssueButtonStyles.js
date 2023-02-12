import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        marginBottom:10
    },

    icon_container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:30
    },

    button:{
        width: metrics.width * 0.9,
        height: metrics.height * 0.1,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        borderRadius:10,
        backgroundColor:colors.white,
        elevation:10    
    },

    lottie:{
        height:metrics.height * 0.08,
        width:metrics.width * 0.15,
        position:'absolute',
        resizeMode:'cover'
    },
    
    text:{
        fontSize: fonts.size.font15,
        color: colors.text,
        fontWeight: fonts.weight.bold,
        fontFamily: fonts.type.roboto,
        marginLeft:20
    }, 

    icon:{
        color:colors.white,
        fontSize: 25    
    },
    
    arrow:{
        color: colors.primary,
        fontSize: 40,
        marginRight:20    
    }
});

export default styles;