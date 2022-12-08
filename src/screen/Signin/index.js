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
import Icon from 'react-native-vector-icons/Feather';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../../stores/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
export default function Signin(props) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [form, setForm] = useState({});

  // const [text, setText] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  // const handleLogin = () => {
  //   props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  // };
  const navSignup = () => {
    props.navigation.navigate('Signup');
  };
  const navFinger = () => {
    props.navigation.navigate('FingerPrint');
  };
  const navForgot = () => {
    props.navigation.navigate('ForgotPassword');
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = async () => {
    try {
      // console.log(form);
      const result = await axios.post('auth/login', form);
      await AsyncStorage.setItem('userId', result.data.data.userid);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      alert(result.data.message);
      console.log(result.data);
      props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
    } catch (error) {
      console.log(error.response);
    }
  };
  // const handleLogin = async () => {
  //   try {
  //     const result = await dispatch(login(form));
  //     await AsyncStorage.setItem('userId', result.data.data.userid);
  //     await AsyncStorage.setItem('token', result.data.data.token);
  //     await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
  //     setTimeout(() => {
  //       alert(result.data.data.message);
  //       props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  //     }, 3000);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
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
        // defaultValue={form}
        onChangeText={form => handleChangeForm(form, 'email')}
      />
      <View style={{marginBottom: 20}}>
        <View style={{position: 'relative'}}>
          <TextInput
            style={styles.input}
            placeholder="password"
            autoCapitalize="none"
            onChangeText={form => handleChangeForm(form, 'password')}
            secureTextEntry={showPassword ? false : true}
            placeholderTextColor="#A0A3BD"
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              height: '100%',
              paddingHorizontal: 12,
              justifyContent: 'center',
            }}
            onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Icon name="eye-off" size={18} color="#3366FF" />
            ) : (
              <Icon name="eye" size={18} color="#A0A3BD" />
            )}
          </TouchableOpacity>
        </View>
      </View>

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
