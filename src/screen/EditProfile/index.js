import React, {useState, useCallback} from 'react';
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

// import styles from './styles';

export default function EditProfile(props) {
  const [checked, setChecked] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  const [selectedNation, setSelectedNation] = React.useState('');
  const [professionOpen, setProfessionOpen] = useState(false);
  const [nationalOpen, setNationalOpen] = useState(false);

  const data = [
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
            placeholder="name"
            defaultValue={'made'}
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
            Username
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={'made'}
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
            placeholder="name"
            defaultValue={'made'}
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
            Phone
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={'made'}
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
          <SelectList
            setSelected={val => setSelected(val)}
            data={data}
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
            placeholder="name"
            defaultValue={'08/12/1998'}
            editable={false}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <Button
          title="Save"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
      </ScrollView>
    </View>
  );
}
