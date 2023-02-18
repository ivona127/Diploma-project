import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        width: metrics.width * 0.95,
        height: metrics.height * 0.1,        
        marginBottom:15,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: colors.white,
        borderRadius:10,
        elevation: 5,
        alignItems:'center',
    },

    textContainer:{
        justifyContent:'center',
        width: metrics.width * 0.5,
    },

    hospitalName:{
        fontSize: fonts.size.font15,
        color: colors.text,
        fontWeight: fonts.weight.bold,
        fontFamily: fonts.type.roboto,
        marginLeft:20
    }, 

    buttonsContainer:{
        flexDirection:'row',
        marginRight:10,
    },

    button:{
      borderRadius:30,
      margin:10,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    icon:{
      color: colors.white,
      fontSize: fonts.size.font25
    }, 

    icon_container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding:15
    },

    lottie:{
        height:metrics.height * 0.08,
        width:metrics.width * 0.15,
        position:'absolute',
        resizeMode:'cover'    
    },
});

export default styles;