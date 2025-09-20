import { Text, StyleSheet } from 'react-native';
import CityInput from "./CityInput";
import {useState} from "react";
import {Appbar} from 'react-native-paper';


export default function Heather() {
  const [city, setCity] = useState('');

  const clearInput = () => {
    setCity('');   // clears from Heather too
  };

  return (
    <Appbar.Header mode='small' style={styles.heatherContainer}>
      <Appbar.Content title='Weather Now' />
      <Appbar.Action icon='theme-light-dark'/>
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  heatherContainer: {
    borderRadius: 20
  },
  text: {
    fontSize: 30
  }

});