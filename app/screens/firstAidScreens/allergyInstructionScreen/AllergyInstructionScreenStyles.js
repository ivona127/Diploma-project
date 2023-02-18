import {StyleSheet} from 'react-native';

import colors from '../../../theme/Colors';
import fonts from '../../../theme/Fonts';
import metrics from '../../../theme/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        width: metrics.width,
        height: metrics.height,
    },

    iconButton:{
        position: 'absolute',
        top: 0,
        marginLeft: 10,
        marginTop: 40
    },

    icon:{
        color: colors.primary,
        fontSize: fonts.size.font25,
        fontWeight: fonts.weight.bold
    },

    imageContainer:{
        top: metrics.height / 8
    },

    image: {
        width: metrics.width,
        height: metrics.height / 4,
      },

    textContainer:{
        alignItems: 'center',
        top: metrics.height / 10,
    },

    title:{
        color: colors.primary,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font25,
        fontWeight: fonts.weight.bold
    },

    instructionsContainer:{
        top: metrics.height / 6,
        alignItems:'center'
    },

    card:{
        backgroundColor: colors.white,
        elevation:10,
        borderRadius:10,
        width: metrics.width /1.1,
        height: metrics.height / 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        color: colors.primary,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font19,
        fontWeight: fonts.weight.bold

    },

    innerText:{
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font15,
        fontWeight: fonts.weight.normal
    }

});

export default styles;