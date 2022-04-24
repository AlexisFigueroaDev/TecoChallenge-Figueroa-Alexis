import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#020202',
    marginBottom: 20,
  },
  posterContainer: {
    flex: 1,
    // backgroundColor: 'red',
    maxHeight: 300,
    width: 300,
    padding: 10,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 5.25,
    shadowRadius: 3.84,
    elevation: 10,
    backgroundColor: '#81afeb',
  },
  poster: {
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 5.25,
    shadowRadius: 3.84,
    elevation: 10,
    backgroundColor: 'red',
  },
  diario: {
    flexDirection: 'row',
  },
  forecastDaily: {
    height: 180,
    width: 80,
    padding: 10,
    top: 50,
    marginBottom: 60,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 5.25,
    shadowRadius: 3.84,
    elevation: 10,
    backgroundColor: '#81afeb',
    marginLeft: 10,
    marginRight: 5,
  },
  OtherCity: {
    alignSelf: 'center',
    height: 80,
    width: 300,
    padding: 10,
    top: 50,
    marginBottom: 60,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 5.25,
    shadowRadius: 3.84,
    elevation: 10,
    backgroundColor: '#81afeb',
    marginLeft: 10,
    marginRight: 5,
  },
});

export default styles;
