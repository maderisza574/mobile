import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import Detail from '../screen/Detail';
import Order from '../screen/Order';
import MyBooking from '../screen/MyBooking';
import MyWishlist from '../screen/MyWishlist';
import Payment from '../screen/Payment';
import Counter from '../screen/Counter';
import Profile from '../screen/Profile';
import Notification from '../screen/Notification';
import EditProfile from '../screen/EditProfile';
import ChangePassword from '../screen/ChangePassword';
import DrawerContent from '../components/DrawerContent';
import HeaderHome from '../components/Header/home';
import HeaderDefault from '../components/Header/default';
import AllEvent from '../screen/AllEvent';

function MenuNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA AKAN MASUK KE DALAM DRAWER DISINI
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          header: props => <HeaderHome {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          header: props => <HeaderDefault {...props} name="Profile" />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />

      {/* MY BOOKING */}
      <Drawer.Screen
        name="My Booking"
        component={MyBooking}
        options={{
          header: props => <HeaderDefault {...props} name="My Booking" />,
          drawerIcon: ({size, color}) => (
            <Icon name="profile" color={color} size={size} />
          ),
        }}
      />
      {/* MY WISHLIST */}
      <Drawer.Screen
        name="My Wishlist"
        component={MyWishlist}
        options={{
          header: props => <HeaderDefault {...props} name="My Wishlist" />,
          drawerIcon: ({size, color}) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      {/* notif local*/}
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          header: props => <HeaderDefault {...props} name="Notification" />,
          drawerIcon: ({size, color}) => (
            <Icon name="notification" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AppStackNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA DAPAT DI AKSES DILUAR DRAWER DISINI
    <Stack.Navigator initialRouteName="MenuNavigator">
      {/* HOME SCREEN */}
      <Stack.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false, headerTransparent: true}}
      />
      {/* ORDER */}
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          header: props => <HeaderDefault {...props} name="Checkout" />,
        }}
      />
      {/* PAYMENT */}
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          header: props => <HeaderDefault {...props} name="Payment" />,
        }}
      />
      {/* EDIT PROFILE */}
      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
          header: props => <HeaderDefault {...props} name="Edit Profile" />,
        }}
      />
      {/* CHANGE PASSWORD */}
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          header: props => <HeaderDefault {...props} name="Change Password" />,
        }}
      />
      {/* All Event */}
      <Stack.Screen
        name="All Event"
        component={AllEvent}
        options={{
          header: props => <HeaderDefault {...props} name="All Event" />,
        }}
      />
    </Stack.Navigator>
  );
}
