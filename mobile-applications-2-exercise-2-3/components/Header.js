import {StyleSheet} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';


export default function Header({toggleTheme}) {
    return (
        <Appbar.Header
            style={styles.heatherContainer}
            statusBarHeight={0} // disables the safe-area padding, as we are already using SafeAreaView in the app
            >
            <Appbar.Content title='Weather Now'/>
            <Appbar.Action icon='theme-light-dark' onPress={toggleTheme}/>
            <Appbar.Action icon='information'/>
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