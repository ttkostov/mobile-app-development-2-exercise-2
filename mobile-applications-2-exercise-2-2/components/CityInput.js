import {View, StyleSheet, TextInput, Button} from 'react-native';
import PrimaryButton from "./PrimaryButton";

export default function CityInput({value, onChangeText, onClear, onSubmit}) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Enter a city'
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
                value={value}
            />
            <PrimaryButton
                text='Clear'
                onPress={onClear}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    textInput: {
        borderWidth: 1,
        width: 250,
        padding: 10,
    },
    button: {
    }
})