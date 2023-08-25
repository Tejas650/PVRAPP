import {Alert, FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {MoviesCards} from '../../Context';
import {useStripe} from '@stripe/stripe-react-native';

const TheatreScreen = ({route, navigation}) => {
  const {seats, setSeats} = useContext(MoviesCards);

  const stripe = useStripe();

  console.log('Seats Occupied', seats);

  const onSeatSelected = item => {
    const seatSelected = seats.find(seat => seat === item);
    if (seatSelected) {
      setSeats(seats.filter(seat => seat !== item));
    } else {
      setSeats([...seats, item]);
    }
  };

  const fee = 87;
  const noOfSeats = seats.length;
  const total = seats.length > 0 ? fee + noOfSeats * 240 : 0;

  const showSeats = () => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {seats.map((seat, index) => (
        <Text
          key={index}
          style={{marginTop: 4, fontSize: 17, paddingHorizontal: 4}}>
          {seat}
        </Text>
      ))}
    </View>
  );

  const subScribe = async () => {
    const response = await fetch('http://localhost:8000/payment', {
      method: 'POST',
      body: JSON.stringify({
        amount: Math.floor(total * 100),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const datas = await response.json();
    console.log(datas);
    if (!response.ok) return Alert.alert(datas.message);
    const clientSecret = datas.clientSecret;
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
    });
    if (initSheet.error) return Alert.alert(initSheet.error.message);
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });
    if (presentSheet.error) return Alert.alert(presentSheet.error.message);
    else {
      navigation.navigate('Ticket');
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            style={{marginLeft: 5}}
            size={24}
            color="black"
          />
          <View style={{marginLeft: 6}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              {route.params.name}
            </Text>
            <Text
              style={{
                marginTop: 2,
                color: 'gray',
                fontSize: 15,
                fontWeight: '500',
              }}>
              {route.params.mall}
            </Text>
          </View>
        </View>
        <Ionicons
          style={{marginRight: 12}}
          name="share-social-outline"
          size={24}
          color="black"
        />
      </View>

      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 16,
        }}>
        {route.params.timeSelected}
      </Text>

      <Text
        style={{
          color: 'gray',
          textAlign: 'center',
          fontSize: 14,
          marginTop: 15,
        }}>
        CLASSIC (240)
      </Text>

      <View style={{marginTop: 20}}>
        <FlatList
          numColumns={7}
          data={route.params.tableSeats}
          renderItem={({item}) => (
            <Pressable
              onPress={() => onSeatSelected(item)}
              style={{
                margin: 10,
                borderColor: 'gray',
                borderWidth: 0.5,
                borderRadius: 4,
              }}>
              {seats.includes(item) ? (
                <Text
                  style={{
                    padding: 8,
                    backgroundColor: '#ffc40c',
                    textAlign: 'center',
                  }}>
                  {item}
                </Text>
              ) : (
                <Text
                  style={{
                    padding: 8,
                    textAlign: 'center',
                  }}>
                  {item}
                </Text>
              )}
            </Pressable>
          )}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 100,
            marginTop: 20,
            backgroundColor: '#C0C0C0',
            padding: 10,
          }}>
          <View>
            <FontAwesome
              style={{textAlign: 'center', marginBottom: 4}}
              name="square"
              size={24}
              color="#ffc40c"
            />
            <Text>Selected</Text>
          </View>

          <View style={{marginHorizontal: 20}}>
            <FontAwesome
              style={{textAlign: 'center', marginBottom: 4}}
              name="square"
              size={24}
              color="white"
            />
            <Text>Vacant</Text>
          </View>

          <View>
            <FontAwesome
              style={{textAlign: 'center', marginBottom: 4}}
              name="square"
              size={24}
              color="#71797E"
            />
            <Text>Occupied</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{padding: 10}}>
            <Text style={{marginBottom: 7, fontSize: 15, fontWeight: '500'}}>
              Show end time approx 6:51pm
            </Text>
            {seats.length > 0 ? (
              showSeats()
            ) : (
              <Text style={{fontSize: 18}}>No seats selected</Text>
            )}
          </View>

          <View
            style={{
              backgroundColor: '#C0C0C0',
              padding: 6,
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
            }}>
            <Text style={{width: 100}}>Now with ticket cancellation</Text>
          </View>
        </View>
      </View>

      <Pressable
        style={{
          backgroundColor: '#ffc40c',
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        {seats.length > 0 ? (
          <Text style={{fontSize: 17, fontWeight: '500'}}>
            {seats.length} seat's selected
          </Text>
        ) : (
          <Text></Text>
        )}

        <Pressable onPress={subScribe}>
          <Text style={{fontSize: 17, fontWeight: '600'}}>PAY ₹{total}</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default TheatreScreen;

const styles = StyleSheet.create({});
