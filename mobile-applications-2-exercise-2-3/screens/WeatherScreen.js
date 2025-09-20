import {View, StyleSheet} from 'react-native';
import Header from '../components/Header.js';
import WeatherPanel from '../components/WeatherPanel'
import CustomFAB from '../components/CustomFAB';

export default function WeatherScreen() {

    return (
        <View style={styles.screen}>
            <Header/>
            <View style={styles.weatherContainer}>
                <WeatherPanel/>
            </View>
            <CustomFAB/>
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
});