import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import movies from '../data/movies';
import Header from './Header';
import {useNavigation} from '@react-navigation/native';

const MovieCards = () => {
  const data = movies;

  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Header}
        numColumns={2}
        data={data}
        renderItem={({item}) => (
          <Pressable style={{margin: 10, marginHorizontal: 15}}>
            <Image
              style={{
                aspectRatio: 2 / 3,
                height: 240,
                borderRadius: 6,
              }}
              source={{uri: item.image}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                width: 175,
                marginTop: 10,
              }}>
              {item.name.substring(0, 16) + '...'}
            </Text>

            <Text style={{marginTop: 4, fontSize: 16, color: 'gray'}}>
              U/A . {item.language}
            </Text>
            <Text style={{fontSize: 14, marginTop: 4, fontWeight: '500'}}>
              {item.genre}
            </Text>
            <Pressable
              onPress={() =>
                navigation.navigate('Movies', {
                  movieTitle: item.name,
                })
              }
              style={{
                backgroundColor: '#ffc40c',
                padding: 10,
                borderRadius: 6,
                marginRight: 10,
                width: 100,
                marginTop: 10,
              }}>
              <Text
                style={{fontSize: 14, fontWeight: '500', textAlign: 'center'}}>
                BOOK
              </Text>
            </Pressable>
          </Pressable>
        )}
      />
    </View>
  );
};

export default MovieCards;
