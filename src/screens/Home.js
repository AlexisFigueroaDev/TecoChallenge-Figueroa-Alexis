/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState, ActivityIndicator} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
// import Carousel from 'react-native-snap-carousel';

import ForecastComponent from '../components/ForecastComponent';
import {useForecastForDay} from '../hooks/useForecastForDay';
import {useWeatherState} from '../hooks/useWeatherState';
import styles from '../styles/Home/HomeStyle';
import {
  getForecast,
  getForecasteForDay,
} from './../redux/actions/forecastActions';

const Home = () => {
  const dispatch = useDispatch();
  const {ciudad, temp, dt, icon, lat, lon} = useWeatherState();
  const {listDay} = useForecastForDay();
  const {top} = useSafeAreaInsets();
  const [city] = useState('Cordoba');

  useEffect(() => {
    dispatch(getForecast(city));
    if (lat !== undefined) {
      dispatch(getForecasteForDay({lat, lon}));
    }
  }, [dispatch, lat]);

  console.log(listDay);
  return (
    <ScrollView style={{flexGrow: 1}}>
      <View style={{...styles.container, marginTop: top}}>
        <Text style={styles.title}>Clima</Text>
        <View style={styles.posterContainer}>
          <ForecastComponent
            width={150}
            height={150}
            sizeDate={20}
            sizeTemp={60}
            toShowCity={true}
            dt={dt}
            uri={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            temp={temp}
            city={ciudad}
          />
        </View>
        <View style={styles.diario}>
          {listDay.map((value, index) => (
            <View style={styles.forecastDaily} key={index}>
              <ForecastComponent
                width={80}
                height={80}
                sizeDate={10}
                sizeTemp={15}
                toShowCity={false}
                dt={value.dt}
                uri={`https://openweathermap.org/img/wn/${value.weather[0].icon}@4x.png`}
                temp={value.temp.day.toFixed(1)}
                city={ciudad}
              />
            </View>
          ))}
        </View>

        <View style={styles.OtherCity}>
          <Text>Clima otras ciudades</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
