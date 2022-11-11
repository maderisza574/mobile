import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
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
  const navForgot = () => {
    props.navigation.navigate('ForgotPassword');
  };
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 30,
          color: 'black',
          marginHorizontal: 30,
          marginTop: 20,
        }}>
        Login
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 15,
          color: 'black',
          marginBottom: 50,
          marginHorizontal: 30,
        }}>
        Hi,Welcome back to Urticket
      </Text>
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
      <Text
        tittle="forgotbutton"
        style={styles.forgotbutton}
        onPress={navForgot}>
        Forgot Password?
      </Text>
      <Button title="Login" onPress={handleLogin} />
      <Text style={{marginLeft: 150, marginTop: 100}}>Or sign in with</Text>
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

      <TouchableOpacity style={styles.buttonSignup} onPress={navSignup}>
        <Text style={{color: 'white'}}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
