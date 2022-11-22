import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
// import styles from './styles';

export default function ChangePassword(props) {
  return (
    <View>
      <Text>Change Password</Text>
      <View>
        <Text
          style={{
            opacity: 0.5,
          }}>
          Old Password
        </Text>
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          placeholderTextColor="#A0A3BD"
          style={{
            backgroundColor: 'white',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            opacity: 0.5,
          }}>
          New Password
        </Text>
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          placeholderTextColor="#A0A3BD"
          style={{
            backgroundColor: 'white',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
          }}
        />
      </View>
      <Button title="Update" />
    </View>
  );
}

const style = StyleSheet.create({});
