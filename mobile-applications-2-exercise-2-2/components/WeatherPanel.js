import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {MOCK_WEATHER} from "../utils/mockWeather";
import {getWeatherEmoji} from "../utils/weatherCodeMap";
import PrimaryButton from "./PrimaryButton";
import {useState} from "react";
import WeatherDetails from "./WeatherDetails";

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
                        <WeatherDetails/>
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
    }
});
