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
    
    textContainer:{
        alignItems:'center',
        top: metrics.height / 8
    },

    pickerContainer:{
        borderColor: colors.text,
        borderWidth: 0.5,
        elevation: 0.5,
        marginTop: metrics.height / 15
    },

    button:{
        alignItems: 'center',
        backgroundColor:colors.primary,
        borderRadius:20,
        elevation: 10,
        justifyContent:'center',
        width: metrics.width / 1.5,
        height: metrics.height / 12
    },

    card:{
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius:20,
        elevation:10,
        justifyContent: 'center',
        width: metrics.width / 1.2,
        height: metrics.height / 3,
        padding:20    
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
        width: metrics.width / 1.2, 
        marginTop: 30,
        textAlign: 'center'
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