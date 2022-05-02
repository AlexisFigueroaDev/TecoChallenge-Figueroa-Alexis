/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import ForecastComponent from '../components/ForecastComponent';
import {useForecastForDay} from '../hooks/useForecastForDay';
import {useWeatherState} from '../hooks/useWeatherState';
import styles from '../styles/Home/HomeStyle';
import {
  getForecast,
  getForecasteForDay,
} from './../redux/actions/forecastActions';
import PickerComponent from '../components/PickerComponent';
import ForecastForDayComponent from '../components/ForecastForDayComponent';
import Config from 'react-native-config';
import {textTitle} from '../styles/utils/text';
import {color, size} from '../styles/utils/activityIndicator';

const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.selectedCity.city?.result);
  const {cityApi, temp, dt, icon, lat, lon} = useWeatherState();
  const {listDay} = useForecastForDay();
  const {top} = useSafeAreaInsets();
  const [city, setCity] = useState('Cordoba');

  useEffect(() => {
    dispatch(getForecast(city));
    if (lat !== undefined) {
      dispatch(getForecasteForDay({lat, lon}));
    }

    if (value !== undefined) {
      setCity(value);
    }
  }, [dispatch, lat, city, value]);

  return (
    <View
      style={{
        ...styles.container,
        marginTop: top,
      }}>
      <Text style={styles.title}>{textTitle}</Text>
      <View style={styles.posterContainer}>
        {dt === undefined ? (
          <View style={styles.spinner}>
            <ActivityIndicator color={color} size={size} />
          </View>
        ) : (
          <ForecastComponent
            width={150}
            height={150}
            sizeDate={20}
            sizeTemp={60}
            toShowCity={true}
            dt={dt}
            uri={`${Config.URI_IMG}${icon}${Config.SIZE_IMG}`}
            temp={temp}
            city={cityApi}
          />
        )}
      </View>

      <View style={styles.daily}>
        {listDay.length === 0 ? (
          <View style={styles.spinner}>
            <ActivityIndicator color={color} size={size} />
          </View>
        ) : (
          <ForecastForDayComponent listDay={listDay} />
        )}
      </View>

      <View style={styles.OtherCity}>
        <PickerComponent />
      </View>
    </View>
  );
};

export default Home;
