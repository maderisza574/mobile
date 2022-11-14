import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function DetailHeader(props) {
  const openDrawer = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="arrowleft" size={25} color={'black'} />
      </TouchableOpacity>
      <View>
        <Icon name="hearto" size={25} color={'white'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    height: 55,
    width: '100%',
    // marginTop: -30,
    zIndex: 3,
    position: 'absolute',
  },
});
