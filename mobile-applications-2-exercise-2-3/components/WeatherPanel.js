import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PrimaryButton from "./PrimaryButton";
import {useState} from "react";
import WeatherDetails from "./WeatherDetails";
import CityInput from "./CityInput";
import {useTheme} from "react-native-paper";

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

    const theme = useTheme();

    const styles = StyleSheet.create({
        panelContainer: {
            flex: 1,
            borderRadius: 20,
            backgroundColor: theme.colors.surface,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: 20,
            padding: 10
        },

    });

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


