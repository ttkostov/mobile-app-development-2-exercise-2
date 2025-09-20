import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import WeatherScreen from './screens/WeatherScreen';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Provider as PaperProvider, MD3LightTheme} from 'react-native-paper';

export default function App() {
    return (
        <PaperProvider theme={MD3LightTheme}>
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
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                backgroundColor: 'darkslategray',
            },
            android: {
               // backgroundColor: MD3LightTheme.colors.background, // TODO
                backgroundColor: 'darkseagreen',
            },
            web: {
                backgroundColor: 'chocolate',
            },
            default: {
                backgroundColor: 'darkslateblue',

            }
        }),
        padding: 20,
    },
});
