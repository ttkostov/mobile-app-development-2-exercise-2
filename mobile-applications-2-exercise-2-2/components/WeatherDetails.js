import {StyleSheet, Text, View} from "react-native";
import {MOCK_WEATHER} from "../utils/mockWeather";
import {getWeatherEmoji} from "../utils/weatherCodeMap";

export default function WeatherDetails() {
    return (
        <View style={styles.weatherContainer}>
            <Text style={styles.cityText}>{MOCK_WEATHER.city}</Text>
            <Text style={styles.icon}>{getWeatherEmoji(MOCK_WEATHER.code)}</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>{MOCK_WEATHER.temperatureC} °C</Text>
                <Text style={styles.detailsText}>{MOCK_WEATHER.windKmh} km/h</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20
    },
    cityText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon: {
        fontSize: 150,
        textAlign: 'center',
    },
    detailsContainer: {
        flexDirection: 'row',
        gap: 30
    },
    detailsText: {
        fontSize: 25,
        textAlign: 'center'
    }
});