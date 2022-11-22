import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile(props) {
  const navEditProfile = () => props.navigation.navigate('EditProfile');
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
            }}>
            Jhon Tomson
          </Text>
          <Text
            style={{
              color: '#3493D9',
            }}>
            Enterpreneur.ID
          </Text>
        </View>
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 25, color: 'black'}}>Card</Text>
            <TouchableOpacity style={{marginTop: -30}}>
              <Image source={require('../../assets/img/Add.png')} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={{marginHorizontal: 15}}>
            <View style={{marginRight: 15}}>
              <Image
                source={require('../../assets/img/creditcard.png')}
                style={{width: 200, height: 150, borderRadius: 10}}
              />
            </View>
            <View style={{marginRight: 15}}>
              <Image
                source={require('../../assets/img/creditcard.png')}
                style={{width: 200, height: 150, borderRadius: 10}}
              />
            </View>
            <View style={{marginRight: 15}}>
              <Image
                source={require('../../assets/img/creditcard.png')}
                style={{width: 200, height: 150, borderRadius: 10}}
              />
            </View>
          </ScrollView>

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
        <TouchableOpacity>
          <Icon
            name="edit"
            size={25}
            color={'white'}
            onPress={navEditProfile}
          />
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="unlock" size={25} color={'white'} />
          <Text>Change Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
