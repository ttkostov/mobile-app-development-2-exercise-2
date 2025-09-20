import {StatusBar, StyleSheet, View} from 'react-native';
import WeatherScreen from './screens/WeatherScreen';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function App() {
  return (

        <SafeAreaProvider>
          <SafeAreaView style={styles.screen}>
            <StatusBar barStyle='dark-content'/>
            <View style={styles.container}>
              <WeatherScreen/>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'antiquewhite',
    width: '100%',
  },
});
