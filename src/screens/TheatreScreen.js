import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TheatreScreen = ({route, navigation}) => {
  console.log(route.params);

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
              style={{
                margin: 10,
                borderColor: 'gray',
                borderWidth: 0.5,
                padding: 7,
                borderRadius: 4,
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '400', textAlign: 'center'}}>
                {item}
              </Text>
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
            <Text style={{fontSize: 18}}>No seats selected</Text>
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
    </SafeAreaView>
  );
};

export default TheatreScreen;

const styles = StyleSheet.create({});
