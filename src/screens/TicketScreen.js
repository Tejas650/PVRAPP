import {Image, Pressable, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import moment from 'moment';
import SvgQRCode from 'react-native-qrcode-svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MoviesCards} from '../../Context';

const TicketScreen = ({route, navigation}) => {
  const {ticket} = useContext(MoviesCards);

  const ticketDetails = route.params;
  useEffect(() => {
    const generateTicket = () => {
      ticket.push(ticketDetails);
    };
    generateTicket();
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          height: '93%',
          margin: 10,
          borderRadius: 6,
        }}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            {route.params.name}
          </Text>
          <Text>{route.params.selectedSeats.length}</Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16, color: 'gray'}}>Hindi - 2D</Text>

          <Text style={{color: 'red', fontSize: 16}}>PVR TICKET</Text>
        </View>

        <Text
          style={{
            fontSize: 15,
            fontWeight: '600',
            marginHorizontal: 10,
            marginTop: 9,
          }}>
          {route.params.mall}
        </Text>

        <View
          style={{
            borderStyle: 'dotted',
            borderWidth: 1,
            borderColor: 'gray',
            marginHorizontal: 10,
            margin: 10,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: 10, marginLeft: 10}}>
            <Text style={{color: 'gray', fontSize: 15, fontWeight: '500'}}>
              DATE & TIME
            </Text>
            <Text style={{marginVertical: 4, fontSize: 16}}>
              {route.params.timeSelected}
            </Text>
            <Text>{moment(route.params.date).utc().format('MM/DD/YYYY')}</Text>
          </View>

          <Image
            style={{
              aspectRatio: 4 / 2,
              height: 60,
              borderRadius: 6,
            }}
            source={{uri: route.params.image}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            margin: 10,
          }}>
          <View>
            <Text>AUDI NO</Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 6,
              }}>
              2
            </Text>
          </View>

          <View>
            <Text>TICKETS</Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 6,
              }}>
              {route.params.selectedSeats.length}
            </Text>
          </View>

          <View style={{marginRight: 15}}>
            <Text>SEATS</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 6,
              }}>
              {route.params.selectedSeats.map((item, index) => (
                <Text
                  key={index}
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: 'bold',
                    margin: 3,
                  }}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View
          style={{
            borderStyle: 'dotted',
            borderWidth: 1,
            borderColor: 'gray',
            marginHorizontal: 10,
            margin: 10,
          }}
        />

        <View
          style={{
            height: 130,
            backgroundColor: '#FAD5A5',
            borderRadius: 6,
            margin: 10,
          }}>
          <View style={{padding: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Price Details
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 4,
              }}>
              <Text style={{color: '#FF4433', fontSize: 15, fontWeight: '500'}}>
                {route.params.selectedSeats
                  ? route.params.selectedSeats.length
                  : 0}
                's Seats (classic)
              </Text>
              <Text style={{color: '#FF4433', fontSize: 15, fontWeight: '500'}}>
                ₹{route.params.seatPrice}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 4,
              }}>
              <Text style={{color: '#FF4433', fontSize: 15, fontWeight: '500'}}>
                Convenience Fee
              </Text>
              <Text style={{color: '#FF4433', fontSize: 15, fontWeight: '500'}}>
                ₹89
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 4,
              }}>
              <Text style={{color: '#FF4433', fontSize: 15, fontWeight: '500'}}>
                Grand Total
              </Text>
              <Text style={{color: '#FF4433', fontSize: 15, fontWeight: '500'}}>
                ₹{route.params.total}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 4,
              }}>
              <Text style={{color: '#FF4433', fontSize: 15, fontWeight: '500'}}>
                ID NO
              </Text>
              <Text style={{color: '#FF4433', fontSize: 15, fontWeight: '500'}}>
                FGSJSDN3493943
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderStyle: 'dotted',
            borderWidth: 1,
            borderColor: 'gray',
            marginHorizontal: 10,
            margin: 10,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 20,
          }}>
          <SvgQRCode value={'hello'} />
        </View>

        <Text style={{fontSize: 16, fontWeight: '500', textAlign: 'center'}}>
          W33JNK3
        </Text>

        <View
          style={{
            borderStyle: 'dotted',
            borderWidth: 1,
            borderColor: 'gray',
            marginHorizontal: 10,
            margin: 10,
          }}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: 'green',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 90,
          borderRadius: 4,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            padding: 8,
            fontSize: 15,
            fontWeight: '500',
          }}>
          Home
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default TicketScreen;
