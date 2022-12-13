import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import HeaderDetail from '../../components/Header/detail';
import styles from './styles';
import Event from '../../assets/img/event.png';
import Icon from 'react-native-vector-icons/AntDesign';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import Map from '../../assets/img/map.png';
import {Button} from 'react-native-paper';
import Avatar from '../../assets/img/avatargrup.png';
import axios from '../../utils/axios';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

export default function Detail(props) {
  console.log(props);
  const [dataEvent, setDataEvent] = useState([]);
  console.log(dataEvent);
  const eventid = props.route.params.eventId;
  // console.log(eventid);
  useEffect(() => {
    getDataEvent();
    // console.log(props.route.params.eventId);
  }, []);
  const navBuy = () => {
    props.navigation.navigate('Order', {dataDetailEvent: dataEvent});
  };
  const getDataEvent = async () => {
    try {
      const result = await axios.get(`/event/${eventid}`);
      setDataEvent(result.data.data);
      console.log(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <View>
        <HeaderDetail {...props} />
        <Image
          source={{
            uri: `https://res.cloudinary.com/maderisza/image/upload/v1663492332/${dataEvent[0]?.image}`,
          }}
          style={{width: 400, height: 700}}
        />
        <View style={styles.tittlecard}>
          <Text style={styles.bigtittlecard}>{dataEvent[0]?.name}</Text>
          <Text style={styles.thetittlecard}>
            <Icon name="enviromento" size={15} style={styles.iconcard} />
            {dataEvent[0]?.location}
          </Text>
          <Text style={styles.thetittlecard}>
            <Icon
              name="clockcircleo"
              style={styles.iconcard}
              size={15}
              color={'red'}
            />
            {dataEvent[0]?.dateTimeShow}
          </Text>
          <Text style={{color: 'white', marginTop: 30}}>Attendes</Text>
          <Image style={{marginTop: 10}} source={Avatar} />
        </View>
      </View>
      {/* <Text style={{fontSize: 300}}>Lorem ipsum dolor ammet</Text> */}

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
