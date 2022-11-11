import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeHeader(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="navicon" size={25} color={'black'} />
      </TouchableOpacity>
      <View>
        <Icon name="comment" size={25} color={'white'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#3366FF',
    height: 100,
  },
});
