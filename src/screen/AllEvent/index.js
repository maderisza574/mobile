import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import axios from '../../utils/axios';

export default function AllEvent(props) {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(5);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('');
  console.log(searchName);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [asc, setAsc] = useState('');

  useEffect(() => {
    getDataEvent();
  }, [page, searchName, asc]);

  const getDataEvent = async () => {
    try {
      if (page <= totalPage) {
        const result = await axios.get(
          `event?page=${page}&limit=&searchName=${searchName}&sort=${asc}`,
          // `event?page=${page}&limit=&name=${searchName}&sort=ASC`,
        );
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.data.pagination.totalPage);
      } else {
        setLast(true);
      }
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
    } catch (error) {}
  };

  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getDataEvent();
    }
  };

  const handleLoadMore = () => {
    console.log('GET DATA AGAIN');
    if (!loadMore) {
      // false
      const newPage = page + 1; // 1 + 1 = 2
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setLoading(true);
        setPage(newPage);
      } else {
        setLoading(false);
      }
    }
  };
  const handleSearch = dataSearchAll => {
    setSearchName(dataSearchAll);
  };
  const handleDetail = eventid => {
    console.log(eventid);
    props.navigation.navigate('Detail', {eventId: eventid});
  };

  //   const ListHeader = () => {
  //     return (
  //       <>
  //         <View style={styles.content}>
  //           <View style={styles.search}>
  //             <TextInput
  //               style={styles.search}
  //               placeholder="Search Event Here..."
  //               onChangeText={text => setSearchName(text)}
  //               onSubmitEditing={() => handleSearch(searchName)}
  //               placeholderTextColor="#DEDEDE"
  //               returnKeyType="search"
  //             />
  //           </View>
  //           <View style={styles.sort}>
  //             <Text>Sort</Text>
  //           </View>
  //         </View>
  //       </>
  //     );
  //   };

  return (
    <View style={{margin: 10}}>
      <View style={{position: 'absolute', zIndex: 3}}>
        <TextInput
          style={styles.searchh}
          placeholder="Search Event Here..."
          onChangeText={text => setSearchName(text)}
          onSubmitEditing={() => handleSearch(searchName)}
          placeholderTextColor="black"
          returnKeyType="search"
        />
      </View>
      <View
        style={{
          marginLeft: 255,
          zIndex: 4,
          position: 'absolute',
          marginTop: -20,
        }}>
        <Pressable
          style={{
            paddingVertical: 3,
            paddingHorizontal: 24,
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}
          android_ripple={{color: '#DEDEDE'}}
          onPress={() => {
            setAsc('asc');
            // setModalVisible(false);
            // getDataEvent();
          }}>
          <Text style={asc === 'asc' ? styles.choose : styles.filterText}>
            Ascending
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}
          android_ripple={{color: '#DEDEDE'}}
          onPress={() => {
            setAsc('desc');
            // setModalVisible(false);
            // getDataEvent();
          }}>
          <Text style={asc === 'desc' ? styles.choose : styles.filterText}>
            Descending
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={data}
        numColumns="2"
        keyExtractor={item => item.eventid}
        style={{marginTop: 20}}
        renderItem={({item}) => (
          <View style={styles.card} onPress={() => handleDetail(item.eventid)}>
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
        onRefresh={handleRefresh}
        refreshing={refresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        // ListHeaderComponent={ListHeader}
        ListFooterComponent={() => (
          <View style={{alignItems: 'center'}}>
            {last ? (
              <Text>-- No more data --</Text>
            ) : loading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : null}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  search: {
    flex: 4,
  },
  sort: {
    flex: 2,
  },
  card: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 0,
    elevation: 2,
    marginHorizontal: 5,
    flex: 1,
    // backgroundColor: 'brown',
    // new style
    width: 160,
    height: 190,
    // marginHorizontal: 15,
    marginTop: 20,
  },
  searchh: {
    borderWidth: 3,
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 16,
    color: 'black',
    height: 50,
    width: 250,
    marginTop: -10,
    marginLeft: 30,
    backgroundColor: 'white',
  },
});
