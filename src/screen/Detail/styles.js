import {StyleSheet} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/colors';

export default StyleSheet.create({
  containerdown: {flex: 1},
  tittlecard: {
    position: 'absolute',
    bottom: 10,
    left: 30,
    top: 300,
  },
  thetittlecard: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  bigtittlecard: {
    fontFamily: 'Poppins-Regular',
    fontSize: 35,
    color: 'white',
  },
  iconcard: {
    color: '#FC1055',
  },
  eventContainer: {
    backgroundColor: '#FCFCFC',
    width: '100%',
    // height: 500,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // marginTop: -100,
    paddingHorizontal: 20,
    position: 'relative',
    top: -50,
    zIndex: 2,
  },
  detailinfo: {
    width: 160,
    height: 276,
    marginHorizontal: 15,
    marginTop: 0,
  },
  tittle: {
    fontSize: 20,
    fontFamily: 'Poppins-Reguler',
    marginBottom: 10,
  },
  opinion: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 15,
    marginBottom: 3,
  },
  readmore: {
    fontFamily: 'Poppins-Reguler',
    color: '#3366FF',
    marginLeft: 250,
  },
  buttonSignup: {
    padding: 10,
    backgroundColor: 'blue',
    marginTop: 30,
  },
});
