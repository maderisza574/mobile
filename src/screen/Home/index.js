import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Event from '../../assets/img/event.png';

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
          <Icon name="list-ul" />
        </View>
        {/* scrol view */}
        <ScrollView horizontal={true}>
          <View style={styles.card}>
            <Image
              source={Event}
              style={{width: '100%', height: '100%', borderRadius: 30}}
            />
            <View style={{position: 'absolute', bottom: 30, left: 25}}>
              <Text style={{color: 'white'}}>Tanggal</Text>
              <Text style={{color: 'white'}}>Title</Text>
              <TouchableOpacity>
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
        </ScrollView>
        {/* end scrol view */}
      </View>
      <Button title="Detail Screen" onPress={navDetail} />
    </View>
  );
}
