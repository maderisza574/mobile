import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Image, Linking} from 'react-native';
import Seat from '../../assets/img/seat.png';
import Reg from '../../assets/img/REG.png';
import Vip from '../../assets/img/VIP.png';
import Vvip from '../../assets/img/VVIP.png';
import Counter from '../Counter';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import axios from '../../utils/axios';

export default function Order(props) {
  const [listBooking, setListBooking] = useState([]);
  const databooking = {
    userid: '36329683-e8ae-4e9e-9d58-1f2616036552',
    eventid: '0bdf7f38-485c-42ca-8f99-7cc11789dbf6',
    totalTicket: 1,
    totalPayment: 200000,
    paymentmethod: 'midtrans',
    statuspayment: true,
  };
  // const [datacheckout, setDataCheckout] = useState({});
  // console.log(datacheckout);
  const handleorder = async () => {
    try {
      // console.log(form);
      const result = await axios.post('/booking', databooking);
      alert(result.data.message);
      // console.log(result.data);
      console.log(result.data.data.redirect_url);
      // setDataCheckout(result.data.redirect_url);
      Linking.openURL(result.data.data.redirect_url);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getDataBooking();
  }, []);

  const getDataBooking = () => {
    // https://www.notion.so/Modul-Booking-293a2b5a8f2b4d09a8e1f25304592c22
    const DATADUMMY = {
      status: 200,
      message: 'Success Get Data Section By Event Id',
      data: [
        {
          section: 'REG1-1',
          booked: 30,
          available: 0,
          statusFull: true,
        },
        {
          section: 'REG1-2',
          booked: 15,
          available: 15,
          statusFull: false,
        },
        {
          section: 'REG1-3',
          booked: 0,
          available: 30,
          statusFull: false,
        },
        {
          section: 'REG1-4',
          booked: 30,
          available: 0,
          statusFull: true,
        },
        {
          section: 'VVIP1-1',
          booked: 5,
          available: 5,
          statusFull: false,
        },
      ],
    };
    const seat = [
      {
        type: 'VVIP',
        section: 1,
      },
      {type: 'VIP', section: 7},
      {type: 'REG', section: 9},
    ];
    const result = seat.map(item => {
      let data = []; // VVIP, VIP, REG
      for (let i = 1; i <= 4; i++) {
        // DIGUNAKAN UNTUK MENCARI DATA TIAP BAGIAN
        for (let j = 1; j <= item.section; j++) {
          // DIGUNAKAN UNTUK MENCARI DATA TIAP SECTION
          const filterSeat = DATADUMMY.data.filter(
            dataSeat => dataSeat.section === `${item.type}${i}-${j}`, // VVIP1-1 === VVIP1-1
          );
          // filterSeat = [{
          //   section: 'VVIP1-1',
          //   booked: 5,
          //   available: 5,
          //   statusFull: false,
          // }]
          const checkData = data.filter(
            dataAvailable => dataAvailable.type === item.type,
          ); // DIGUNAKAN UNTUK MENCARI TAU APAKAH TYPE SUDAH MASUK KE DALAM VARIABEL DATA ?
          // checkData = []
          if (checkData.length < 1) {
            // pengecekan data
            if (filterSeat.length < 1) {
              // JIKA DATA BELUM MASUK KEDALAM DATA BOOKING
              data.push({
                type: item.type,
                section: `${item.type}${i}-${j}`,
                available: item.type.includes('VVIP')
                  ? 10
                  : item.type.includes('VIP')
                  ? 20
                  : 30,
              });
            }
            if (filterSeat.length > 0 && !filterSeat[0]?.statusFull) {
              // JIKA DATA SUDAH MASUK KEDALAM DATA BOOKING
              data.push({
                type: filterSeat[0].section.includes('VVIP')
                  ? 'VVIP'
                  : item.type.includes('VIP')
                  ? 'VIP'
                  : 'REG',
                section: filterSeat[0].section,
                available: filterSeat[0].available,
              });
            }
          }
        }
      }
      return data;
    });
    // result = [[{type: "REG",section: "REG1-1", available: 30}], [{type: "VIP",section: "VIP1-1", available: 20}], [{type: "VVIP",section: "VVIP1-1", available: 5}]]
    const newResult = result.map(item => item[0]);
    // newResult = [
    //   {type: 'REG', section: 'REG1-1', available: 30},
    //   {type: 'VIP', section: 'VIP1-1', available: 20},
    //   {type: 'VVIP', section: 'VVIP1-1', available: 5},
    // ];
    setListBooking(newResult);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <ScrollView>
        <Image source={Seat} />
        <Text>{JSON.stringify(listBooking)}</Text>
        <View style={styles.tittlescren}>
          <View>
            <Text style={styles.ticketz}>Ticket</Text>
          </View>
          <View>
            <Text style={styles.byprice}>By Price</Text>
          </View>
        </View>
        {/* start ticket */}
        <View style={styles.iconticket1}>
          <View>
            <Image source={Reg} style={{width: 30, height: 30}} />
          </View>
          <View style={{marginRight: 5, marginLeft: 10}}>
            <Text>Section REG,Row 1</Text>
            <Text>12 Seats available</Text>
            <Text style={{marginTop: 35}}>Quantity</Text>
          </View>
          <View>
            <Text>$15</Text>
            <Text>per person</Text>
          </View>
        </View>
        <View style={{marginTop: -35}}>
          <Counter />
        </View>
        {/* end ticekt */}
        {/* ticket 2 */}
        <View style={styles.iconticket1}>
          <View>
            <Image source={Vip} style={{width: 30, height: 30}} />
          </View>
          <View style={{marginRight: 5, marginLeft: 10}}>
            <Text>Section VIP,Row 1</Text>
            <Text>12 Seats available</Text>
            <Text style={{marginTop: 35}}>Quantity</Text>
          </View>
          <View>
            <Text>$15</Text>
            <Text>per person</Text>
          </View>
        </View>
        <View style={{marginTop: -35}}>
          <Counter />
        </View>
        {/* en ticket 2 */}
        {/* ticket 3 */}
        <View style={styles.iconticket1}>
          <View>
            <Image source={Vvip} style={{width: 30, height: 30}} />
          </View>
          <View style={{marginRight: 5, marginLeft: 10}}>
            <Text>Section VVIP,Row 1</Text>
            <Text>12 Seats available</Text>
            <Text style={{marginTop: 35}}>Quantity</Text>
          </View>
          <View>
            <Text>$15</Text>
            <Text>per person</Text>
          </View>
        </View>
        <View style={{marginTop: -35, marginBottom: 30}}>
          <Counter />
        </View>
        {/* end ticket 3 */}

        {/* <Button
          title="Payment Screen"
          onPress={() => {
            getDataBooking();
            props.navigation.navigate('Payment');
          }}
        /> */}
        <Button title="Payment Screen" onPress={handleorder} />
        <View style={styles.container}>
          <Button
            title="Click me"
            onPress={() => {
              Linking.openURL('https://google.com');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({});
