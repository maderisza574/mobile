import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
  FlatList,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Event from '../../assets/img/event.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';

export default function Home(props) {
  const [userId, setUserId] = useState('');
  const [data, setData] = useState([]);
  // console.log(data.data.eventid);
  useEffect(() => {
    // checkStorage();
    getUserId();
    getData();
  }, []);
  const getUserId = async () => {
    const data = await AsyncStorage.getItem('userId');
    setUserId(data);
  };

  const getData = async () => {
    try {
      const result = await axios.get('event?name=coba&sort=ASC&');
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDetail = eventid => {
    console.log(eventid);
    props.navigation.navigate('Detail', {eventId: eventid});
  };
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
          <Icon name="list-ul" />
        </View>
        {/* scrol view */}
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({item}) => (
            <View
              style={styles.card}
              onPress={() => handleDetail(item.eventid)}>
              <Image
                source={{
                  uri: `https://res.cloudinary.com/maderisza/image/upload/v1663492332/${item.image}`,
                }}
                style={{width: '100%', height: '100%', borderRadius: 30}}
              />
              <View style={{position: 'absolute', bottom: 30, left: 25}}>
                <Text style={{color: 'white'}}>{item.dateTimeShow}</Text>
                <Text style={{color: 'white'}}>{item.name}</Text>
                <TouchableOpacity onPress={() => handleDetail(item.eventid)}>
                  <Text>GO</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.eventid}
        />
        {/* <ScrollView horizontal={true}>
          <View style={styles.card}>
            <Image
              source={Event}
              style={{width: '100%', height: '100%', borderRadius: 30}}
            />
            <View style={{position: 'absolute', bottom: 30, left: 25}}>
              <Text style={{color: 'white'}}>Tanggal</Text>
              <Text style={{color: 'white'}}>Title</Text>
              <TouchableOpacity onPress={navDetail}>
                <Text>GO</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={Event}
              style={{width: '100%', height: '100%', borderRadius: 30}}
            />
            <View style={{position: 'absolute', bottom: 30, left: 25}}>
              <Text style={{color: 'white'}}>Tanggal</Text>
              <Text style={{color: 'white'}}>Title</Text>
              <TouchableOpacity onPress={navDetail}>
                <Text>GO</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={Event}
              style={{width: '100%', height: '100%', borderRadius: 30}}
            />
            <View style={{position: 'absolute', bottom: 30, left: 25}}>
              <Text style={{color: 'white'}}>Tanggal</Text>
              <Text style={{color: 'white'}}>Title</Text>
              <TouchableOpacity onPress={navDetail}>
                <Text>GO</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={Event}
              style={{width: '100%', height: '100%', borderRadius: 30}}
            />
            <View style={{position: 'absolute', bottom: 30, left: 25}}>
              <Text style={{color: 'white'}}>Tanggal</Text>
              <Text style={{color: 'white'}}>Title</Text>
              <TouchableOpacity onPress={navDetail}>
                <Text>GO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView> */}
        {/* end scrol view */}
      </View>
      <Button title="Detail Screen" onPress={navDetail} />
    </View>
  );
}
