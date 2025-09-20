import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import Header from '../components/Header.js';
import WeatherPanel from '../components/WeatherPanel'
import CustomFAB from '../components/CustomFAB';
import {Platform} from "react-native";
import AboutDialog from "../components/AboutDialog";
import {useState} from "react";

export default function WeatherScreen({toggleTheme}) {
    const [aboutDialogVisible, setAboutDialogVisible] = useState(false);

    const showDialog = () => setAboutDialogVisible(true);

    const hideDialog = () => setAboutDialogVisible(false);

    return (
        <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Header toggleTheme={toggleTheme} showAboutDialog={showDialog} />
                <View style={styles.weatherContainer}>
                    <WeatherPanel/>
                </View>
                <AboutDialog onDismiss={hideDialog} visible={aboutDialogVisible}/>
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