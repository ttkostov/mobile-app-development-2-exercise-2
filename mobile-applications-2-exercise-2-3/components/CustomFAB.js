import { FAB, useTheme } from 'react-native-paper';
import {StyleSheet} from "react-native";
import {AppTheme as theme} from "../theme/AppTheme";

// custom FAB to
export default function PrimaryFAB({onPress}) {
    const theme = useTheme();
    return (
        <FAB
            mode='contained'
            icon='refresh'
            style={styles.fab}
            color={theme.colors.onPrimary}
            onPress={onPress}
        />
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: theme.colors.primary,
    },
});