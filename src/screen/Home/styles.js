import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  sortDateContainer: {
    backgroundColor: '#222B45',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  dateContainer: {alignItems: 'center'},
  date: {color: 'white'},
});
