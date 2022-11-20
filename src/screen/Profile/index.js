import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-paper';
import Ionic from 'react-native-vector-icons/Ionicons';

const EditProfile = ({route, navigation}) => {
  // const {name, accountName, profileImage} = route.params;
  // const TostMessage = () => {
  //   ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  // };
  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}
        />
        <View style={{padding: 20, alignItems: 'center'}}>
          <Image
            source={require('../../assets/img/event.png')}
            style={{width: 80, height: 80, borderRadius: 100}}
          />
          <Text
            style={{
              color: '#3493D9',
            }}
          />
        </View>
        <View style={{padding: 10}}>
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
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
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
              placeholder="accountname"
              defaultValue={'nama'}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
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
              placeholder="accountname"
              defaultValue={'john@gmail.com'}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
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
              placeholder="accountname"
              defaultValue={'081244878919'}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
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
            <TextInput
              placeholder="accountname"
              defaultValue={'male,female'}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
              }}
            />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text
              style={{
                opacity: 0.5,
              }}>
              Profession
            </Text>
            <TextInput
              placeholder="accountname"
              defaultValue={'Enterpreneur'}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
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
              placeholder="accountname"
              defaultValue={'Indonesia'}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
              }}
            />
          </View>
        </View>
        <Button>Save</Button>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
