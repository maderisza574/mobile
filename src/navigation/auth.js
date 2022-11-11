import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Signin from '../screen/Signin';
import Signup from '../screen/Signup';
import FingerPrint from '../screen/FingerPrint';
import ForgotPassword from '../screen/ForgotPassword';

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="FingerPrint" component={FingerPrint} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
