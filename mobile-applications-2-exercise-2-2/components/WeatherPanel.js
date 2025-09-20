import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PrimaryButton from "./PrimaryButton";
import {useState} from "react";
import WeatherDetails from "./WeatherDetails";
import CityInput from "./CityInput";

export default function WeatherPanel() {
    const [loading, setLoading] = useState(false);

    const handleLoading = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    const [city, setCity] = useState('');

    const clearInput = () => {
        setCity('');
    };

    return (
        <View style={styles.panelContainer}>
            {
                loading ? <ActivityIndicator size="large" color='black'/> :
                    <>
                        <CityInput value={city} onChangeText={setCity} onClear={clearInput}/>
                        <WeatherDetails/>
                        <PrimaryButton
                            text='Simulate loading'
                            onPress={handleLoading}/>
                    </>

            }
        </View>
    );
}

const styles = StyleSheet.create({
    panelContainer: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.8)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 10,
        padding: 10,
    }
});
