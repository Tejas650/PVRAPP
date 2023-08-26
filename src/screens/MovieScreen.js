import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment-jalaali';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import malls from '../data/malls';
import {MoviesCards} from '../../Context';

const MovieScreen = ({route, navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [seatsData, setSeatsData] = useState([]);
  const [mall, setMall] = useState('');

  const mallsData = malls;

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

          <Text style={{fontSize: 17, fontWeight: '600', marginLeft: 5}}>
            {route.params.movieTitle}
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
          <Ionicons name="search" size={24} color="black" />
          <Ionicons
            name="filter"
            style={{marginHorizontal: 10}}
            size={24}
            color="black"
          />
          <Ionicons name="share-outline" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 5,
        }}>
        <AntDesign name="Safety" size={24} color="#FFBF00" />
        <Text
          style={{
            paddingTop: 4,
            paddingLeft: 4,
            fontSize: 13,
            fontWeight: '600',
          }}>
          Your Safety is our Priority
        </Text>
      </View>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date('2022-08-24')}
        endDate={new Date('2022-08-30')}
        initialSelectedDate={new Date('2020-08-25')}
        onSelectedDateChange={date => setSelectedDate(date)}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
      />
      {mallsData.map((item, index) => (
        <Pressable
          style={{margin: 10}}
          key={index}
          onPress={() => {
            setMall(item.name);
            setSeatsData(item.tableData);
          }}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{item.name}</Text>

          {mall.includes(item.name) ? (
            <FlatList
              numColumns={3}
              data={item.showtimes}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    navigation.navigate('Theatre', {
                      mall: mall,
                      name: route.params.movieTitle,
                      timeSelected: item,
                      tableSeats: seatsData,
                      date: selectedDate,
                      image: route.params.image,
                    });
                  }}
                  style={{
                    borderColor: 'green',
                    borderWidth: 0.5,
                    width: 80,
                    borderRadius: 3,
                    margin: 10,
                    padding: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'green',
                      fontWeight: '500',
                      textAlign: 'center',
                    }}>
                    {item}
                  </Text>
                </Pressable>
              )}
            />
          ) : null}
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
