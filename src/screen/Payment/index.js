import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import styles from './styles';
import {RadioButton} from 'react-native-paper';
import Card from '../../assets/img/card.png';
import Bank from '../../assets/img/bank.png';
import Market from '../../assets/img/market.png';

export default function Payment(props) {
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.tittlescreen}>Payment Method</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 50,
          }}>
          <RadioButton
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Image source={Card} />
          <Text style={styles.label}>Card</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 50,
          }}>
          <RadioButton
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked1(!checked1);
            }}
          />
          <Image source={Bank} />
          <Text style={styles.label}>Bank Transfer</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 50,
          }}>
          <RadioButton
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked2(!checked2);
            }}
          />
          <Image source={Market} />
          <Text style={styles.label}>Retail</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 50,
          }}>
          <RadioButton
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked3(!checked3);
            }}
          />
          <Image source={Card} />
          <Text style={styles.label}>E-Money</Text>
        </View>
      </View>
      <Button
        title="Home Screen"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({});
