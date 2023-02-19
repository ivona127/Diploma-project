import {StyleSheet} from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    iconButton:{
        marginLeft: 10,
        marginTop: metrics.height /20,
        position: 'absolute',
        top: 0
    },

    icon:{
        color: colors.primary,
        fontSize: fonts.size.font25,
        fontWeight: fonts.weight.bold
    }
});

export default styles;