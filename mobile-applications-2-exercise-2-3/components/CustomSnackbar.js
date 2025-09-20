import {Snackbar, useTheme} from 'react-native-paper';
import {StyleSheet} from "react-native";

export default function CustomSnackbar({visible, onDismiss}) {

    return (
        <Snackbar
            duration={1500}
            visible={visible}
            onDismiss={onDismiss}>
            The content reload was simulated!
        </Snackbar>
    );
}
