import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        height: metrics.height,
        justifyContent: 'center',
        width: metrics.width,
    },

    buttonContainer:{
        alignItems: 'center',
        marginTop: 30
    },

    cardContainer:{
        alignItems: 'center',
        marginTop:15
    },

    inputContainer:{
        elevation: 2,
    }, 

    textContainer:{
        alignItems: 'center',
        marginTop:30
    },

    button:{
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 20,
        elevation: 10,
        justifyContent: 'center',
        height: metrics.height / 12,
        width: metrics.width / 1.5
    },

    card:{
        backgroundColor: colors.white,
        borderRadius: 20,
        elevation: 10,
        justifyContent: 'center',
        height: metrics.height / 6.5,
        width: metrics.width / 1.2,
        padding: 20,
    },

    iconButton:{
        position: 'absolute',
        marginLeft: 20,
        marginTop: 50,
        top: 0
    },

    icon:{
        color: colors.primary,
        fontSize: fonts.size.font25,
        fontWeight: fonts.weight.bold
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