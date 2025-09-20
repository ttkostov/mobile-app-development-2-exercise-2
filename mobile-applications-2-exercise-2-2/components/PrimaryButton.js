import {Button, View, StyleSheet, Platform} from "react-native";

export default function PrimaryButton({text, onPress, disabled}) {
    return (
        <View style={styles.button}>
            <Button
                title={text}
                onPress={onPress}
                disabled={disabled}
                color={Platform.select({
                    ios: 'black',
                    android: 'darkslategray',
                    web: 'darkred',
                    default: 'darkblue',
                })}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        minWidth: 100,
    }
})


