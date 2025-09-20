import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import Header from '../components/Header.js';
import WeatherPanel from '../components/WeatherPanel'
import CustomFAB from '../components/CustomFAB';
import {Platform} from "react-native";

export default function WeatherScreen() {

    return (
        <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Header/>
                <View style={styles.weatherContainer}>
                    <WeatherPanel/>
                </View>
                <CustomFAB/>
        </KeyboardAvoidingView>


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