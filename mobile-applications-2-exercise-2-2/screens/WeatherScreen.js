import {View, StyleSheet} from 'react-native';
import Header from '../components/Header.js';
import WeatherPanel from '../components/WeatherPanel'

export default function WeatherScreen() {
    return (
        <View style={styles.screen}>
            <View style={styles.heatherContainer}>
                <Header/>
            </View>

            <View style={styles.weatherContainer}>
                <WeatherPanel/>
            </View>

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
    heatherContainer: {
        flex: 1,
    },
    weatherContainer: {
        flex: 3,
    },
});