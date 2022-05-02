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
    maxHeight: 300,
    width: 300,
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
  daily: {
    flexDirection: 'row',
    height: 180,
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
  spinner: {
    flex: 1,
    height: 300,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;
