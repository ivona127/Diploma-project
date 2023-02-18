import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        height: metrics.height,
        width: metrics.width,
        justifyContent:'center'
    },

    buttonContainer:{
        alignItems: 'center',
        marginTop:50
    },

    textContainer:{
        alignItems:'center',
        marginBottom:20
    },

    cardContainer:{
        alignItems: 'center',
        marginTop:20
    },

    inputContainer:{
        alignItems:'center',
        elevation:2,
        paddingTop:5    
    }, 

    iconButton:{
        position: 'absolute',
        top: 0,
        marginLeft: 20,
        marginTop: 50,
    },

    icon:{
        color: colors.primary,
        fontSize: fonts.size.font25,
        fontWeight: fonts.weight.bold
    },

    card:{
        backgroundColor: colors.white,
        borderRadius:20,
        elevation:10,
        justifyContent: 'center',
        height: metrics.height / 8,
        width: metrics.width / 1.2,
        padding:20    
    },

    button:{
        alignItems: 'center',
        backgroundColor:colors.primary,
        borderRadius:20,
        elevation: 10,
        justifyContent: 'center',
        height: metrics.height / 12,
        width: metrics.width / 1.5
    },

    buttonText:{
        color: colors.white,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font21,    
        fontWeight: fonts.weight.bold
    },

    cardText:{
        color: colors.primary,
        fontFamily: fonts.type.roboto, 
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size.font14,
    },

    secondaryText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font16,
        fontWeight: fonts.weight.normal,
        width: metrics.width / 1.2, 
        marginTop: 30,
    },

    title:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font21,
        fontWeight: fonts.weight.bold,
        textAlign: 'center'
    }
});

export default styles;