import {View, StyleSheet, Platform} from "react-native";
import {Button} from 'react-native-paper';

export default function PrimaryButton({text, onPress, disabled}) {
    return (
        <View style={styles.button}>
            <Button
                mode="contained"
                onPress={onPress}
                disabled={disabled}
                icon='refresh'
            >{text}</Button>
        </View>

)
}

const styles = StyleSheet.create({
    button: {
        minWidth: 100,
    }
})


