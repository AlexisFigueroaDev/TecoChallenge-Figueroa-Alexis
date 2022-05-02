import React from 'react';
import {Text, View, Image} from 'react-native';
import useCalculeteDay from '../hooks/useCalculeteDay';
import styles from '../styles/Components/ForecastComponent/ForecastComponent.Style';

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
  const {day} = useCalculeteDay(dt);
  return (
    <View>
      <Text style={{...styles.dayText, fontSize: sizeDate}}>{day}</Text>
      <Image
        style={{...styles.img, width: width, height: height}}
        source={{uri: uri}}
      />
      <Text style={{...styles.tempText, fontSize: sizeTemp}}>{temp}˚C</Text>
      {toShowCity ? <Text style={styles.cityText}>{city},AR</Text> : null}
    </View>
  );
};

export default ForecastComponent;
