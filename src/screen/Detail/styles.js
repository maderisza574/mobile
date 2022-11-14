import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerdown: {flex: 1},
  eventContainer: {
    backgroundColor: '#FCFCFC',
    width: '100%',
    height: 1000,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -500,
    paddingHorizontal: 20,
    position: 'absolute',
    zIndex: 2,
  },
  detailinfo: {
    width: 160,
    height: 276,
    marginHorizontal: 15,
    marginTop: 0,
  },
});
