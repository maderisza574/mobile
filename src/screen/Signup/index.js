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

export default function Signin(props) {
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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
        placeholder="Full Name"
        defaultValue={text}
        onChangeText={newText => newText}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        defaultValue={text}
        onChangeText={newText => newText}
      />
      <View style={{marginBottom: 20}}>
        <View style={{position: 'relative'}}>
          <TextInput
            style={styles.input}
            placeholder="Password"
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
      </View>
      <View style={{marginBottom: 20}}>
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
      </View>
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
        onPress={handleSignup}
      />
    </View>
  );
}
