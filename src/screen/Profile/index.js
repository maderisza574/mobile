import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from '../../utils/axios';

export default function Profile(props) {
  const navEditProfile = () => {
    props.navigation.navigate('Edit Profile');
  };
  const navChangePassword = () => {
    props.navigation.navigate('Change Password');
  };
  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}
        />
        <View style={{padding: 20, alignItems: 'center'}}>
          <Image
            source={require('../../assets/img/event.png')}
            style={{width: 80, height: 80, borderRadius: 100}}
          />
          <Text
            style={{
              color: '#3493D9',
            }}>
            Jhon Tomson
          </Text>
          <Text
            style={{
              color: '#3493D9',
            }}>
            Enterpreneur.ID
          </Text>
        </View>
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 25, color: 'black'}}>Card</Text>
            <TouchableOpacity style={{marginTop: -30}}>
              <Image source={require('../../assets/img/Add.png')} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={{marginHorizontal: 15}}>
            <View style={{marginRight: 15}}>
              <Image
                source={require('../../assets/img/creditcard.png')}
                style={{width: 200, height: 150, borderRadius: 10}}
              />
            </View>
            <View style={{marginRight: 15}}>
              <Image
                source={require('../../assets/img/creditcard.png')}
                style={{width: 200, height: 150, borderRadius: 10}}
              />
            </View>
            <View style={{marginRight: 15}}>
              <Image
                source={require('../../assets/img/creditcard.png')}
                style={{width: 200, height: 150, borderRadius: 10}}
              />
            </View>
          </ScrollView>

          {/* Input Form */}
        </View>
        <TouchableOpacity
          style={{flexDirection: 'row', marginTop: 20}}
          onPress={navEditProfile}>
          <Icon
            name="edit"
            size={25}
            color={'black'}
            style={{marginRight: 20, marginLeft: 10}}
          />
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', marginTop: 20, marginLeft: 10}}
          onPress={navChangePassword}>
          <Icon
            name="unlock"
            size={25}
            color={'black'}
            style={{marginRight: 20}}
          />
          <Text>Change Password</Text>
          <Button style={{marginTop: 235}}>Save</Button>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
