/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ForecastComponent} from './ForecastComponent';

export const HorizontalSlider = (title, movies) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'black',
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={item => (
          <ForecastComponent forecast={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
