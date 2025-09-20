import {Text, StyleSheet} from 'react-native';
import CityInput from "./CityInput";
import {useState} from "react";
import {Appbar, Searchbar} from 'react-native-paper';


export default function Heather() {
    const [city, setCity] = useState('');

    const clearInput = () => {
        setCity('');   // clears from Heather too
    };

    return (
        <Appbar.Header
            style={styles.heatherContainer}
            statusBarHeight={0} // disables the safe-area padding, as we are already using SafeAreaView in the app
            >
            <Appbar.Content title='Weather Now'/>
            <Appbar.Action icon='theme-light-dark'/>
        </Appbar.Header>

    )
}

const styles = StyleSheet.create({
    heatherContainer: {
        borderRadius: 20,
    },
    text: {
        fontSize: 30
    }

});