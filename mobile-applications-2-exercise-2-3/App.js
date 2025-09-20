import {StatusBar, StyleSheet} from 'react-native';
import WeatherScreen from './screens/WeatherScreen';
import { SafeAreaView} from "react-native-safe-area-context";
import {Provider as PaperProvider, MD3LightTheme} from 'react-native-paper';
import {LightTheme, DarkTheme} from "./theme/AppTheme";
import {useState} from "react";

export default function App() {
    const [isThemeDark, setIsThemeDark] = useState(false);

    const toggleTheme = () => {
        isThemeDark ? setIsThemeDark(false) : setIsThemeDark(true);
    }

    const theme = isThemeDark ? DarkTheme : LightTheme;

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

    return (
        <PaperProvider theme={theme}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' backgroundColor={MD3LightTheme.colors.background}/>
                <WeatherScreen toggleTheme={toggleTheme} />
            </SafeAreaView>
        </PaperProvider>
    );
}


