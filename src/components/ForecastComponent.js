/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';

const ForecastComponent = ({
  width,
  height,
  sizeDate,
  dt,
  uri,
  sizeTemp,
  temp,
  city,
  toShowCity,
}) => {
  const date = () => {
    let a = new Date(dt * 1000);
    let months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let day = a.getDate();

    let time = day + ' ' + month + ' ' + year;
    return time;
  };

  const day = date();
  return (
    <View>
      <Text style={{fontSize: sizeDate, color: '#3d3b3d', textAlign: 'center'}}>
        {day}
      </Text>
      <Image
        style={{width: width, height: height, alignSelf: 'center'}}
        source={{uri: uri}}
      />

      <Text style={{fontSize: sizeTemp, color: '#000', textAlign: 'center'}}>
        {temp}˚C
      </Text>

      {toShowCity ? (
        <Text style={{fontSize: 20, color: '#3d3b3d', textAlign: 'center'}}>
          {city},AR
        </Text>
      ) : null}
    </View>
  );
};

export default ForecastComponent;
