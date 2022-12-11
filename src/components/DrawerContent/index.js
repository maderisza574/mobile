import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {getDataUser} from '../../stores/actions/user';

function DrawerContent(props) {
  const [userid, setUserid] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.user.data[0]);
  console.log(data);
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

  const handleLogout = async () => {
    try {
      alert('Logout');
      await AsyncStorage.clear();
      props.navigation.replace('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <View>
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
              style={{width: 40, height: 40, borderRadius: 100}}
            />
          </View>
          <View style={styles.biodata}>
            <Text style={styles.title}>{data?.name}</Text>
            <Text style={styles.caption}>{data?.username}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
