import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Google from '../../assets/img/btnGoogle.png';
import Facebook from '../../assets/img/btnFacebook.png';
import Finger from '../../assets/img/btnFinger.png';
export default function Signin(props) {
  const [text, setText] = useState('');
  const handleLogin = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };
  const navSignup = () => {
    props.navigation.navigate('Signup');
  };
  const navFinger = () => {
    props.navigation.navigate('FingerPrint');
  };
  return (
    <View>
      <Text>Signin Screen</Text>
      <Text style={{fontFamily: 'Poppins-Black'}}>Login</Text>
      <Text>Hi,Welcome back to Urticket</Text>
      <TextInput
        style={styles.input}
        placeholder="Input Your Email"
        defaultValue={text}
        onChangeText={newText => newText}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        defaultValue={text}
        onChangeText={newText => newText}
      />
      <Text>Forgot Password?</Text>
      <Text>Or sign in with</Text>
      <View style={styles.groupbutton}>
        <View>
          <Image source={Google} />
        </View>
        <View>
          <Image source={Facebook} />
        </View>
        <TouchableOpacity onPress={navFinger}>
          <Image source={Finger} />
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity style={styles.buttonSignup} onPress={navSignup}>
        <Text style={{color: 'white'}}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
