import {View, StyleSheet} from 'react-native';
import Heather from '../components/Heather.js';
import WeatherPanel from '../components/WeatherPanel'

export default function WeatherScreen() {
    return (
        <View style={styles.screen}>
            <View style={styles.heatherContainer}>
                <Heather/>
            </View>

            <View style={styles.weatherContainer}>
                <WeatherPanel/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        gap: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    heatherContainer: {
        flex: 1,
    },
    weatherContainer: {
        flex: 3,
    }
});