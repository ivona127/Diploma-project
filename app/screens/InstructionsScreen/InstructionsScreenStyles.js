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

    imageContainer:{
        top: metrics.height / 8
    },

    instructionsContainer:{
        alignItems: 'center',
        height: metrics.height / 2.1,
        top: metrics.height / 6
    },

    secondaryTextContainer:{
        marginBottom: 10,
        padding: 10
    },

    titleContainer:{
        alignItems: 'center',
        top: metrics.height / 10,
        paddingHorizontal:10
    },

    image: {
        height: metrics.height / 4,
        width: metrics.width
    },

    title:{
        color: colors.primary,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font25,
        fontWeight: fonts.weight.bold
    },

    secondaryText:{
        color: colors.primary,
        fontFamily: fonts.type.roboto,
        fontSize: fonts.size.font19,
        fontWeight: fonts.weight.bold,
    }
});

export default styles;