import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        height: metrics.height,
        width: metrics.width    
    },

    buttonContainer:{
        alignItems: 'center',
        top: metrics.height / 2.5,
    },

    cardContainer:{
        alignItems: 'center',
        top: metrics.height / 3.25
    },

    titleContainer:{
        alignItems:'center',
        padding: 5,
        top: metrics.height / 4
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
        backgroundColor: colors.white,
        borderRadius:20,
        elevation:10,
        height: metrics.height / 4,
        justifyContent: 'center',
        padding:30,    
        width: metrics.width / 1.2
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

    swithThumbColor:{
        color:colors.white
    },

    swithTrackColor:{
        color: colors.primary
    },
    
    title:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font19,
        fontWeight: fonts.weight.normal,
        textAlign: 'center'
    }
});

export default styles;