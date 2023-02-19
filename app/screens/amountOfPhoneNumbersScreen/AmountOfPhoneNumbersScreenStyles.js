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
    },

    buttonContainer:{
        alignItems: 'center',
        top: metrics.height / 4,
    },

    cardContainer:{
        alignItems: 'center',
        top: metrics.height / 5.5
    },
    
    pickerContainer:{
        borderColor: colors.text,
        borderWidth: 0.5,
        elevation: 0.5,
        marginTop: metrics.height / 15
    },

    textContainer:{
        alignItems:'center',
        top: metrics.height / 8
    },

    button:{
        alignItems: 'center',
        backgroundColor:colors.primary,
        borderRadius:20,
        elevation: 10,
        height: metrics.height / 12,
        justifyContent:'center',
        width: metrics.width / 1.5
    },

    card:{
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius:20,
        elevation:10,
        height: metrics.height / 3,
        justifyContent: 'center',
        padding:20,    
        width: metrics.width / 1.2
    },

    picker:{ 
        color: colors.text,    
        width: metrics.width / 3    
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
        fontSize: fonts.size.font18,    
        fontWeight: fonts.weight.bold
    },

    secondaryText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font16,
        fontWeight: fonts.weight.normal,
        marginTop: 30,
        textAlign: 'center',
        width: metrics.width / 1.2
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