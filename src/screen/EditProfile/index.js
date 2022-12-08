import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {getDataUser, updateDataUser} from '../../stores/actions/user';
// import axios from '../../utils/axios';

// import styles from './styles';

export default function EditProfile(props) {
  const [userid, setUserid] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.user.data[0]);
  console.log(data);
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
    email: '',
  });
  const updateHandler = async () => {
    try {
      await dispatch(updateDataUser(userid, form));
      await getDataUser(userid);
      alert('sukses');
    } catch (error) {
      alert('error');
    }
  };
  console.log(form);
  useEffect(() => {
    getMyStringValue();
    dispatch(getDataUser(userid));
  }, [userid]);
  // console.log(userid);

  const [checked, setChecked] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  const [selectedNation, setSelectedNation] = React.useState('');
  const [professionOpen, setProfessionOpen] = useState(false);
  const [nationalOpen, setNationalOpen] = useState(false);

  const dataJob = [
    {key: '1', value: 'Developer', disabled: true},
    {key: '2', value: 'IT Support'},
    {key: '3', value: 'UI/UX'},
  ];
  const dataNation = [
    {key: '1', values: 'Indonesia', disabled: true},
    {key: '2', values: 'USA'},
    {key: '3', values: 'Australia'},
  ];
  const onProfessionOpen = useCallback(() => {
    setNationalOpen(false);
  }, []);

  const onNationalOpen = useCallback(() => {
    setProfessionOpen(false);
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={{padding: 20, alignItems: 'center'}}>
          <Image
            source={require('../../assets/img/event.png')}
            style={{width: 80, height: 80, borderRadius: 100}}
          />
        </View>
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
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text>Male</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text>Female</Text>
            </View>
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
          <SelectList
            setSelected={val => setSelected(val)}
            data={dataJob}
            save="value"
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
          <SelectList
            setSelectedNation={val => setSelectedNation(val)}
            data={dataNation}
            save="values"
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
        <Button title="Save" onPress={updateHandler} />
      </ScrollView>
    </View>
  );
}
