import {View, StyleSheet} from 'react-native';
import Header from '../components/Header.js';
import WeatherPanel from '../components/WeatherPanel'
import {FAB} from 'react-native-paper';

export default function WeatherScreen() {
    return (
        <View style={styles.screen}>
            <Header/>
            <View style={styles.weatherContainer}>
                <WeatherPanel/>
            </View>

            <FAB
                icon='refresh'
                style={styles.fab}
                mode='elevated'
            />

        </View>

    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        gap: 20
    },
    weatherContainer: {
        flex: 3,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});