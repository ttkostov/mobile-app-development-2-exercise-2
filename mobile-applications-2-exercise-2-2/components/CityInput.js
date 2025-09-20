import {View, StyleSheet, TextInput} from 'react-native';
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
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    textInput: {
        borderRadius: 20,
        borderWidth: 1,
        maxWidth: 200,
        padding: 10,
    }
})