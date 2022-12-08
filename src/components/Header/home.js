import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeHeader(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  const handleSearchInput = e => {
    setKeyword(e.target.value);
  };
  const [keyword, setKeyword] = useState('');
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="navicon" size={25} color={'black'} />
      </TouchableOpacity>
      <View>
        <Icon name="comment" size={25} color={'white'} />
      </View>
      <View style={styles.search}>
        <TextInput
          style={{
            height: 30,
            width: 200,
            backgroundColor: '#3366FF',
            color: 'white',
            borderColor: '#FFFFF',
            borderWidth: 1,
            borderRadius: 10,
          }}
          placeholder="Search Event Here"
          onChange={handleSearchInput}
        />
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
    height: 150,
  },
  search: {
    position: 'absolute',
    left: 100,
    top: 50,
  },
});
