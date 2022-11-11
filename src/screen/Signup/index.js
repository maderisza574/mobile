import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import styles from './styles';

export default function Signin(props) {
  const [text, setText] = useState('');
  const handleSignup = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };
  return (
    <View>
      <Text>Signup Screen</Text>
      <Text>already have an account?Login</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Password"
        defaultValue={text}
        onChangeText={newText => newText}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        defaultValue={text}
        onChangeText={newText => newText}
      />

      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
}
