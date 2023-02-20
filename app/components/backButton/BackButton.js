import {TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './BackButtonStyles'

const BackButton = ({onPress}) => {
    return (
        <TouchableOpacity 
            style={styles.iconButton} 
            onPress={onPress}
        >
            <AntDesign 
                name="arrowleft" 
                style={styles.icon} 
            />
        </TouchableOpacity>
    );
};

export default BackButton;