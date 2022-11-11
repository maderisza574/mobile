import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import styles from './styles';

export default function Home(props) {
  const navDetail = () => props.navigation.navigate('Detail');
  return (
    <View style={styles.container}>
      <View style={styles.sortDateContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>13</Text>
          <Text style={styles.date}>Mon</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>14</Text>
          <Text style={styles.date}>Tue</Text>
        </View>
        <Text style={styles.date}>15</Text>
        <Text style={styles.date}>16</Text>
        <Text style={styles.date}>17</Text>
      </View>

      <View style={styles.containerdown}>
        <View style={styles.eventContainer}>
          <Text>Event For You</Text>
        </View>
      </View>
      <Button title="Detail Screen" onPress={navDetail} />
    </View>
  );
}
