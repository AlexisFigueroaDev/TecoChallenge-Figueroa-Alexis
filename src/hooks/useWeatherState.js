import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const useWeatherState = () => {
  const temperatura = useSelector(state => state.forecastReducer?.forecast);

  const [getWeather, setGetWeather] = useState();
  const [ciudad, setCiudad] = useState('');
  const [temp, setTemp] = useState();
  const [dt, setDt] = useState();
  const [icon, setIcon] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    setGetWeather(temperatura);
    setCiudad(getWeather?.name);
    setTemp(getWeather?.main.temp.toFixed(1));
    setDt(getWeather?.dt);
    setIcon(getWeather?.weather[0].icon);
    setLat(getWeather?.coord.lat);
    setLon(getWeather?.coord.lon);
  }, [temperatura, getWeather]);

  return {
    getWeather,
    ciudad,
    temp,
    dt,
    icon,
    lat,
    lon,
  };
};
