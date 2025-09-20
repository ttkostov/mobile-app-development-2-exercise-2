import {Platform, StatusBar, StyleSheet} from 'react-native';
import WeatherScreen from './screens/WeatherScreen';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar barStyle='light-content'/>
            <SafeAreaView style={styles.container}>
                <WeatherScreen/>
            </SafeAreaView>
        </SafeAreaProvider>
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
