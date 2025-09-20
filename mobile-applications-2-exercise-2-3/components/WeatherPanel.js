import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PrimaryButton from "./PrimaryButton";
import {useState} from "react";
import WeatherDetails from "./WeatherDetails";
import CityInput from "./CityInput";
import {AppTheme as theme} from "../theme/AppTheme";

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
                loading ? <ActivityIndicator size="large" color={theme.colors.primary}/> :
                    <>
                        <CityInput value={city} onChangeText={setCity} onClear={clearInput}/>
                        <WeatherDetails/>
                        <PrimaryButton
                            text='Simulate loading'
                            icon='refresh'
                            onPress={handleLoading}/>
                    </>

            }
        </View>
    );
}

const styles = StyleSheet.create({
    panelContainer: {
        borderRadius: 20,
        backgroundColor: theme.colors.surface,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 20,
    },

});
