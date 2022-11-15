import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import HeaderDetail from '../../components/Header/detail';
import styles from './styles';
import Event from '../../assets/img/event.png';
import Icon from 'react-native-vector-icons/AntDesign';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import Map from '../../assets/img/map.png';
import {Button} from 'react-native-paper';
import Avatar from '../../assets/img/avatargrup.png';

export default function Detail(props) {
  useEffect(() => {
    console.log(props.route.params.productId);
  }, []);
  const navBuy = () => {
    props.navigation.navigate('Order');
  };
  return (
    <ScrollView>
      <View>
        <HeaderDetail {...props} />
        <Image source={Event} style={{width: 400, height: 700}} />
        <View style={styles.tittlecard}>
          <Text style={styles.bigtittlecard}>Sight & Sounds exhibition</Text>
          <Text style={styles.thetittlecard}>
            <Icon name="enviromento" size={15} style={styles.iconcard} />{' '}
            Jakarta,Indonesia
          </Text>
          <Text style={styles.thetittlecard}>
            <Icon
              name="clockcircleo"
              style={styles.iconcard}
              size={15}
              color={'red'}
            />
            Wed,15 Nov, 04.00 PM
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
