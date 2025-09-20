import {View, StyleSheet, ActivityIndicator} from 'react-native';
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
    );
}

const styles = StyleSheet.create({
    panelContainer: {
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.8)',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 20,
    },

});
