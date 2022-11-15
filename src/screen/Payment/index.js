import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import styles from './styles';

export default function Payment(props) {
  return (
    <View>
      <View style={styles.container}>
        <Text>Payment Method</Text>
      </View>
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
