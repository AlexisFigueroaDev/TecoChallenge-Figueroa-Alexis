import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const useForecastForDay = () => {
  const [listDay, setListDay] = useState([]);

  const valueForDay = useSelector(
    state => state.forecasteForDay.forecasteForDay,
  );

  console.log(typeof valueForDay);
  useEffect(() => {
    if (typeof valueForDay === 'object') {
      setListDay(valueForDay.slice(1, 6));
    }
  }, [valueForDay]);

  return {
    listDay,
  };
};
