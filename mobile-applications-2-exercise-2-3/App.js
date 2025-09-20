import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import WeatherScreen from './screens/WeatherScreen';
import { SafeAreaView} from "react-native-safe-area-context";
import {Provider as PaperProvider, MD3LightTheme} from 'react-native-paper';
import {AppTheme as theme, AppTheme} from "./theme/AppTheme";

export default function App() {
    return (
        <PaperProvider theme={AppTheme}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' backgroundColor={MD3LightTheme.colors.background}/>
                <WeatherScreen/>
            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: theme.colors.background,
    },
});
