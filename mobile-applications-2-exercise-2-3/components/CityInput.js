import {View, StyleSheet} from 'react-native';
import PrimaryButton from "./PrimaryButton";
import {TextInput} from 'react-native-paper'

export default function CityInput({value, onChangeText, onClear, onSubmit}) {
    return (
        <View style={styles.container}>
            <TextInput
                mode="outlined"
                style={styles.textInput}
                label='City'
                placeholder='Helsinki'
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
        width: 250,
    },
})