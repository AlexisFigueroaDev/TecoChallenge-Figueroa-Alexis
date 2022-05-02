import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {City} from '../const/CityBase';
import {getSelectedCity} from '../redux/actions/forecastActions';

const PickerComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSelectedCity(selectedLanguage));
  }, [dispatch, selectedLanguage]);

  return (
    <View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        {City.map(value => (
          <Picker.Item label={value.name} value={value.name} key={value.id} />
        ))}
      </Picker>
    </View>
  );
};

export default PickerComponent;
