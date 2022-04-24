/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
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
  const [selectedLanguage, setSelectedLanguage] = useState();
  const {top} = useSafeAreaInsets();
  const [city, setCity] = useState('Cordoba');

  useEffect(() => {
    dispatch(getForecast(city));
    if (lat !== undefined) {
      dispatch(getForecasteForDay({lat, lon}));
    }
    if (selectedLanguage !== undefined) {
      setCity(selectedLanguage);
    }
  }, [dispatch, lat, selectedLanguage, city]);

  return (
    <View
      style={{
        ...styles.container,
        marginTop: top,
        flex: 1,
      }}>
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
        <View>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Cordoba" value="Cordoba" />
            <Picker.Item label="Buenos Aires" value="Buenos Aires" />
            <Picker.Item label="Mendoza" value="Mendoza" />
            <Picker.Item label="Misiones" value="Misiones" />
            <Picker.Item label="Salta" value="Salta" />
            <Picker.Item label="Ushuaia" value="Ushuaia" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default Home;
