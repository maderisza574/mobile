import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import HeaderDetail from '../../components/Header/detail';
import styles from './styles';
import Event from '../../assets/img/event.png';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import Map from '../../assets/img/map.png';
import {Button} from 'react-native-paper';

export default function Detail(props) {
  const navBuy = () => {
    props.navigation.navigate('Order');
  };
  return (
    <ScrollView>
      <View>
        <HeaderDetail {...props} />
        <Image source={Event} style={{width: 400, height: 700}} />
      </View>
      {/* <ScrollView> */}
      <View style={styles.containerdown}>
        <View style={styles.eventContainer}>
          <Text style={styles.tittle}>Event Detail</Text>
          <Text style={styles.opinion}>
            After his controversial art exhibition "Tear and Consume" back in
            November 2018, in which guests were invited to tearup
          </Text>
          <TouchableOpacity>
            <Text style={styles.readmore}>Read more</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.tittle}>Location</Text>
            <Image source={Map} />
            <TouchableOpacity style={styles.buttonSignup} onPress={navBuy}>
              <Text style={{color: 'white', marginLeft: 100}}>Buy Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
    // </ScrollView>
  );
}
