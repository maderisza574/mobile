import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Notification from '../../utils/notif';

export default function NotificationScreen(props) {
  const handleNotification = () => {
    console.log('Click Me !');
    // [without schedule]
    Notification.showNotification();
  };
  const handleScheduleNotification = () => {
    console.log('Click Me !');
    const setSchedule = {
      title: 'Schedule Notification Title', // (optional)
      message: 'Schedule Notification Message', // (required)
      date: new Date(Date.now() + 5 * 1000), // in 15 secs
    };
    // [with schedule]
    Notification.scheduleProductNotification(setSchedule);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notification Screen</Text>
      <Button title="Show Notification" onPress={handleNotification} />
      <Button
        title="Schedule Notification"
        onPress={handleScheduleNotification}
      />
    </View>
  );
}

const style = StyleSheet.create({});
