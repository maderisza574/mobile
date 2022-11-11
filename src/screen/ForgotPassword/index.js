import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import styles from './styles';

export default function Profile(props) {
  const [text, setText] = useState('');
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
        Forgot Password
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
        You'll get mail soon on your email
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Input Your Email"
        defaultValue={text}
        onChangeText={newText => newText}
      />
      <Button style={{marginBottom: 100}} title="Send" />
    </View>
  );
}

const style = StyleSheet.create({});
