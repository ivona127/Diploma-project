import {Text, View} from 'react-native';
import styles from './TextFieldStyles';

const TextField = (props) =>{
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {props.number + 1 + '. '}
                </Text>

                <Text style={styles.innerText}>
                    {props.text}
                </Text>
            </View>
        </View>
    );
}

export default TextField;