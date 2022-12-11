import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDataUser} from '../../stores/actions/user';
export default function Profile(props) {
  const [userid, setUserid] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.user.data[0]);
  // console.log(data.username);
  const getMyStringValue = async () => {
    try {
      await AsyncStorage.getItem('userId');
      const result = await AsyncStorage.getItem('userId');
      setUserid(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getMyStringValue();
      dispatch(getDataUser(userid));
    });
  }, [userid]);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDataUser())
  // });
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
            source={
              data?.image
                ? {
                    uri: `https://res.cloudinary.com/maderisza/image/upload/v1663492332/${
                      data?.image.split('.')[0]
                    }`,
                  }
                : require('../../assets/img/Add.png')
            }
            style={{width: 80, height: 80, borderRadius: 100}}
          />
          <Text
            style={{
              color: '#3493D9',
            }}>
            {data?.username}
          </Text>
          <Text
            style={{
              color: '#3493D9',
            }}>
            {data?.profession}
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
