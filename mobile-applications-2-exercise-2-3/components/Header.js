import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';


export default function Header() {
    return (
        <Appbar.Header
            style={styles.heatherContainer}
            statusBarHeight={0} // disables the safe-area padding, as we are already using SafeAreaView in the app
            >
            <Appbar.Content title='Weather Now'/>
            <Appbar.Action icon='theme-light-dark'/>
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