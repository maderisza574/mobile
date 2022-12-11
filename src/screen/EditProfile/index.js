import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Button,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator, RadioButton} from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {getDataUser, updateDataUser} from '../../stores/actions/user';
import axios from '../../utils/axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';

// import styles from './styles';

export default function EditProfile(props) {
  const [userid, setUserid] = useState('');
  // const [imageUri, setimageUri] = useState();
  // const [galleryPhoto, setGalleryPhoto] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingData, setisLoadingData] = useState(false);
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.user.data[0]);

  const getMyStringValue = async () => {
    try {
      await AsyncStorage.getItem('userId');
      const result = await AsyncStorage.getItem('userId');
      setUserid(result);
    } catch (e) {
      // read error
    }

    // console.log('Done.');
  };
  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };
  const [form, setForm] = useState({
    name: '',
    username: '',
    gender: '',
    profession: '',
    nationality: '',
    dateofBirth: '',
    email: data?.email,
  });
  const getUserById = async () => {
    await dispatch(getDataUser(userid));
  };
  // eslint-disable-next-line prettier/prettier
  const updateHandler = async e => {
    try {
      e.preventDefault();
      setisLoadingData(true);
      await dispatch(updateDataUser(userid, form));
      setisLoadingData(false);
      getUserById();
      alert('sukses');
    } catch (error) {
      alert('error');
    }
  };
  console.log(form);
  useEffect(() => {
    setTimeout(() => {
      getMyStringValue();
      dispatch(getDataUser(userid));
    }, 3000);
  }, [userid]);
  // console.log(userid);

  // This for Image

  // const options = {
  //   saveToPhotos: true,
  //   mediaType: 'photo',
  // };
  // const openCamera = async () => {
  //   const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.CAMERA,
  //   );
  //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     const result = await launchCamera(options);
  //     setimageUri(result.assets[0].uri);
  //   }
  // };
  // const openGallery = async () => {
  //   const result = await launchImageLibrary(options);
  //   setGalleryPhoto(result.assets[0].uri);
  // };
  const handleLaunchCamera = async () => {
    try {
      const photo = await launchCamera({
        mediaType: 'photo',
        maxWidth: 100,
        quality: 0.2,
        cameraType: 'back',
      });
      const formData = new FormData();
      formData.append('image', {
        name: photo.assets[0].fileName,
        type: photo.assets[0].type,
        uri: photo.assets[0].uri,
      });
      setisLoading(true);
      const result = await axios.patch(`user/updateImage/${userid}`, formData);
      await dispatch(getDataUser(userid));
      setisLoading(false);
      alert(result.data.message);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleLaunchImageLibrary = async () => {
    try {
      const photo = await launchImageLibrary({
        mediaType: 'photo',
        maxWidth: 100,
      });
      const formData = new FormData();
      formData.append('image', {
        name: photo.assets[0].fileName,
        type: photo.assets[0].type,
        uri: photo.assets[0].uri,
      });
      const result = await axios.patch(`user/updateImage/${userid}`, formData);
      await dispatch(getDataUser(userid));
      alert(result.data.message);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  // const handleImage = () => {
  //   if (data?.image) {
  //     setImage(data?.image.split('.')[0]);
  //   } else () {

  //   }
  // };
  // const openCamera = () => {
  //   const options = {
  //     storageOptions: {
  //       path: 'images',
  //       mediaType: 'photo',
  //     },
  //     includeBase64: true,
  //   };
  //   launchCamera(options, response => {
  //     console.log('Response =', response);
  //     if (response.didCancel) {
  //       console.log('user cancel image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error:', response.error);
  //     } else if (response.customButton) {
  //       console.log('User Tapped custom Button:', response.customButton);
  //     } else {
  //       const source = {uri: 'data:image/jpeg;base64,' + response.base64};
  //       setimageUri(source);
  //     }
  //   });
  // };
  // end for Image

  return (
    <View>
      <ScrollView>
        <View style={{padding: 20, alignItems: 'center'}}>
          {isLoading ? (
            <Text>loading</Text>
          ) : (
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
          )}

          {/* <Text>{data?.image}</Text> */}
        </View>
        {/* button Image */}
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              handleLaunchCamera();
            }}
            style={{marginRight: 10}}>
            <Icon name="camera" size={25} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleLaunchImageLibrary();
            }}>
            <Icon name="picture" size={25} color={'black'} />
          </TouchableOpacity>
        </View>
        {/* end buttom Image */}
        {/* Input Form */}
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Name
          </Text>
          <TextInput
            placeholder={data?.name}
            onChangeText={form => handleChangeForm(form, 'name')}
            style={{
              fontSize: 16,
              backgroundColor: 'white',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
              color: 'black',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Username
          </Text>
          <TextInput
            placeholder={data?.username}
            onChangeText={form => handleChangeForm(form, 'username')}
            style={{
              fontSize: 16,
              backgroundColor: 'white',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Email
          </Text>
          <TextInput
            placeholder={data?.email}
            onChangeText={form => handleChangeForm(form, 'email')}
            editable={false}
            style={{
              fontSize: 16,
              backgroundColor: 'white',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Gender
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-evenly',
              marginLeft: -50,
            }}>
            <TextInput
              placeholder={data?.gender}
              onChangeText={form => handleChangeForm(form, 'gender')}
              style={{
                fontSize: 16,
                backgroundColor: 'white',
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}
            />
          </View>
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Profession
          </Text>
          <TextInput
            placeholder={data?.profession}
            onChangeText={form => handleChangeForm(form, 'profession')}
            style={{
              fontSize: 16,
              backgroundColor: 'white',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Nationality
          </Text>
          <TextInput
            placeholder={data?.nationality}
            onChangeText={form => handleChangeForm(form, 'nationality')}
            style={{
              fontSize: 16,
              backgroundColor: 'white',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Birthday Date
          </Text>
          <TextInput
            onChangeText={form => handleChangeForm(form, 'dateofBirth')}
            placeholder={data?.dateofBirth}
            // editable={false}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View>
          <TouchableOpacity onPress={updateHandler}>
            <Text>Save</Text>
          </TouchableOpacity>
          <ActivityIndicator animating={isLoadingData}>
            <Text>Loading</Text>
          </ActivityIndicator>
        </View>
        {/* <Button istitle="Save" onPress={updateHandler} /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
