import {Text, View, StyleSheet, Button, ActivityIndicator} from 'react-native';
import {MOCK_WEATHER} from "../utils/mockWeather";
import {getWeatherEmoji} from "../utils/weatherCodeMap";
import PrimaryButton from "./PrimaryButton";
import {useState} from "react";

export default function WeatherPanel() {
    const [loading, setLoading] = useState(false);

    const handleLoading = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    return (
        <View style={styles.panelContainer}>

            {
                loading ? <ActivityIndicator size="large" color='white'/> :
                    <>
                        <View style={styles.weatherContainer}>
                            <Text style={styles.cityText}>{MOCK_WEATHER.city}</Text>
                            <Text style={styles.icon}>{getWeatherEmoji(MOCK_WEATHER.code)}</Text>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.detailsText}>{MOCK_WEATHER.temperatureC} °C</Text>
                                <Text style={styles.detailsText}>{MOCK_WEATHER.windKmh} km/h</Text>

                            </View>
                        </View>

                        <PrimaryButton
                            text='Simulate loading'
                            onPress={handleLoading}/>
                    </>

            }

        </View>
    )
        ;
}

const styles = StyleSheet.create({
    panelContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    weatherContainer: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        borderRadius: 20
    },
    cityText: {
        fontSize: 40,
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
