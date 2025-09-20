import { Text, View, StyleSheet } from 'react-native';

export default function Heather() {
  return (
    <View style={styles.heatherContainer}>
      <Text style={styles.text}>Weather Now</Text>    
    </View>
  )
}

const styles = StyleSheet.create({
  heatherContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
  text: {
    fontSize: 40
  }

});