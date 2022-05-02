import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import styles from '../styles/Components/ForecastForDay/ForecasteForDay.style';
import ForecastComponent from './ForecastComponent';

const ForecastForDayComponent = ({listDay}) => {
  return (
    <View style={styles.conteiner}>
      <FlatList
        data={listDay}
        renderItem={({item}) => (
          <View style={styles.forecastDaily}>
            <ForecastComponent
              width={90}
              height={90}
              sizeDate={15}
              sizeTemp={25}
              toShowCity={false}
              dt={item.dt}
              uri={`${Config.URI_IMG}${item.weather[0].icon}${Config.SIZE_IMG}`}
              temp={item.temp?.day.toFixed(1)}
            />
          </View>
        )}
        keyExtractor={item => item.dt.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ForecastForDayComponent;
