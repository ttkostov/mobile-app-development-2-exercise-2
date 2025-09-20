import {Text, View, StyleSheet, Button, ActivityIndicator} from 'react-native';
import {MOCK_WEATHER} from "../utils/mockWeather";
import {getWeatherEmoji} from "../utils/weatherCodeMap";
import PrimaryButton from "./PrimaryButton";
import {useState} from "react";
import {Card} from "react-native-paper"

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
                        <Card style={styles.weatherContainer}>
                            <Card.Title title={MOCK_WEATHER.city} titleStyle={styles.cityText}/>
                            <Card.Content>
                                <Text style={styles.icon}>{getWeatherEmoji(MOCK_WEATHER.code)}</Text>
                                <View style={styles.detailsContainer}>
                                    <Text style={styles.temperatureText}>{MOCK_WEATHER.temperatureC} °C</Text>
                                    <Text style={styles.detailsText}>{MOCK_WEATHER.windKmh} km/h</Text>

                                </View>
                            </Card.Content>

                        </Card>

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
        justifyContent: 'space-around',
        gap: 20,
    },
    weatherContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        borderRadius: 20,

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
        flexDirection: 'column',
        gap: 10
    },
    detailsText: {
        fontSize: 20,
        textAlign: 'center'
    },
    temperatureText: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
