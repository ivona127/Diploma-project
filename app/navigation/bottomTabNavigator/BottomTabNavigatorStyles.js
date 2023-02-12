import { StyleSheet } from 'react-native';

import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import metrics from '../../theme/Metrics';

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: colors.background
    },
  
    tabBarIconContainer:{
        top: '5%'
    },
    
    tabBarLabelContainer:{
        bottom: '10%'
    },
  
    tabBar:{
        backgroundColor: colors.white,
        margin: 15,
        marginBottom: 30,
        borderRadius: 40,          
        height: metrics.height / 11.5,
        elevation: 10
    },

    tabBarIcon: {
        fontSize: 30,
        color: colors.text
      },

    focusedTabBarIcon: {
        color: colors.primary
    },

    tabBarLable: {
        fontFamily: fonts.type.roboto,
        fontWeight: fonts.weight.normal,
        color: colors.text
    },

    focusedTabBarLable: {
        color: colors.primary
    }
});

export default styles;