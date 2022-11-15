import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import axios from '../../utils/axios';

export default function Signup(props) {
  const [form, setForm] = useState({});
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  const handleRegister = async () => {
    try {
      // console.log(form);
      const result = await axios.post('/auth/register', form);
      alert(result.data.message);
      console.log(result.data);
      props.navigation.replace('AppScreen', {screen: 'Signin'});
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignup = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
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
        Signup
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 20,
          color: 'black',
          marginHorizontal: 30,
          marginTop: 15,
          marginBottom: 15,
        }}>
        already have an account?Login
      </Text>
      <TextInput
        style={styles.input}
        name="username"
        placeholder="Full Name"
        defaultValue={text}
        onChangeText={form => handleChangeForm(form, 'username')}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        name="email"
        defaultValue={text}
        onChangeText={form => handleChangeForm(form, 'email')}
      />
      <View style={{marginBottom: 20}}>
        <View style={{position: 'relative'}}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            name="password"
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
      {/* <View style={{marginBottom: 20}}>
        <View style={{position: 'relative'}}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            autoCapitalize="none"
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
      </View> */}
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 50}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.label}>Accept terms and codition</Text>
      </View>
      <Button
        style={{marginBottom: 100}}
        title="Signup"
        onPress={handleRegister}
      />
    </View>
  );
}
