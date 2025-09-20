import { Text, View, StyleSheet, Button } from 'react-native';

export default function WeatherPanel() {
  return (
    <View style={styles.panelContainer}>
      <Text style={styles.text}>Weather Info</Text>
      <Button
        color='darkred'
        fontSize='50'
        title='A simple button'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  panelContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    gap: 20,
  },
  text: {
    fontSize: 40,
  }
});
