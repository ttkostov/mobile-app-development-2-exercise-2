import { Text, View, StyleSheet } from 'react-native';


export default function Header() {
  return (
    <View style={styles.heatherContainer}>
      <Text style={styles.text}>Weather Now</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  heatherContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    gap: 20,
    borderRadius: 20
  },
  text: {
    fontSize: 30
  }

});