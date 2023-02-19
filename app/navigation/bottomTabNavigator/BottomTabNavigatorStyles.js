import { StyleSheet } from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        flex: 1
    },
  
    tabBarIconContainer:{
        top: '5%'
    },
    
    tabBarLabelContainer:{
        bottom: '10%'
    },
  
    tabBar:{
        backgroundColor: colors.white,
        borderRadius: 40,          
        elevation: 10,
        height: metrics.height / 11.5,
        margin: 15,
        marginBottom: 30
    },

    tabBarIcon: {
        color: colors.text,
        fontSize: 30
    },

    focusedTabBarIcon: {
        color: colors.primary
    },

    tabBarLable: {
        color: colors.text,
        fontFamily: fonts.type.roboto,
        fontWeight: fonts.weight.normal,
    },

    focusedTabBarLable: {
        color: colors.primary
    }
});

export default styles;