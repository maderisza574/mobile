import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import HeaderDetail from '../../components/Header/detail';
import styles from './styles';
import Event from '../../assets/img/event.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Map from '../../assets/img/map.png';
import {Button} from 'react-native-paper';

export default function Detail(props) {
  return (
    <ScrollView>
      <View>
        <HeaderDetail {...props} />
        <Image source={Event} style={{width: 400, height: 1000}} />
      </View>
      <View style={styles.containerdown}>
        <View style={styles.eventContainer}>
          <Text>Event Detail</Text>

          <Text>
            After his controversial art exhibition "Tear and Consume" back in
            November 2018, in which guests were invited to tearup
          </Text>
          <TouchableOpacity>
            <Text>Read more</Text>
          </TouchableOpacity>
          <View>
            <Text>Location</Text>
            <Image source={Map} />
            <TouchableOpacity>
              <Text>Buy Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
