import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper';
import styles from './styles';

export default function Signin(props) {
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = useState('');

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
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        defaultValue={text}
        onChangeText={newText => newText}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        defaultValue={text}
        onChangeText={newText => newText}
      />
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 50}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Button
        style={{marginBottom: 100}}
        title="Signup"
        onPress={handleSignup}
      />
    </View>
  );
}
