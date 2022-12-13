import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image, Linking} from 'react-native';
import styles from './styles';
import {RadioButton} from 'react-native-paper';
import Card from '../../assets/img/card.png';
import Bank from '../../assets/img/bank.png';
import Market from '../../assets/img/market.png';
import axios from '../../utils/axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Payment(props) {
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const dataOrderBooking = props.route.params.detailDataBooking;
  console.log(dataOrderBooking);
  const [datacheckout, setDataCheckout] = useState({});
  console.log(dataOrderBooking?.totalPayment);
  const handleorder = async () => {
    try {
      // console.log(form);
      const result = await axios.post('/booking', dataOrderBooking);
      alert(result.data.message);
      // console.log(result.data);
      console.log(result.data.data.redirect_url);
      // setDataCheckout(result.data.redirect_url);
      Linking.openURL(result.data.data.redirect_url);
    } catch (error) {
      console.log(error.response);
    }
  };
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
            status={checked1 ? 'checked' : 'unchecked'}
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
            status={checked2 ? 'checked' : 'unchecked'}
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
            status={checked3 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked3(!checked3);
            }}
          />
          <Image source={Card} />
          <Text style={styles.label}>E-Money</Text>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>Total Payment</Text>
          <TouchableOpacity style={{marginLeft: 100}} onPress={handleorder}>
            <Text>Pay Now...</Text>
          </TouchableOpacity>
        </View>
        <Text>Rp{dataOrderBooking?.totalPayment}</Text>
      </View>
      <Button title="payment" onPress={handleorder} />
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
