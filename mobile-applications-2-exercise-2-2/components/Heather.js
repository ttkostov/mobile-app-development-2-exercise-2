import { Text, View, StyleSheet } from 'react-native';
import CityInput from "./CityInput";
import {useState} from "react";

export default function Heather() {
  const [city, setCity] = useState('');

  const clearInput = () => {
    setCity('');   // clears from Heather too
  };

  return (
    <View style={styles.heatherContainer}>
      <Text style={styles.text}>Weather Now</Text>
      <CityInput value={city} onChangeText={setCity} onClear={clearInput}/>
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