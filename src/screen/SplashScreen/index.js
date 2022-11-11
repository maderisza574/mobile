import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SplasImage from '../../assets/img/people.png';
import styles from './styles';

export default function SplashScreen(props) {
  console.log(props);
  const token = false;
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    setTimeout(() => {
      if (token) {
        props.navigation.replace('AppScreen');
      } else {
        props.navigation.replace('AuthScreen');
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 40}}>
        Find Event You love with Our
      </Text>
      <Image source={SplasImage} style={{width: 400, height: 400}} />
    </View>
  );
}
