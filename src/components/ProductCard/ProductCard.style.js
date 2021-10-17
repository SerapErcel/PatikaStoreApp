import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    flex: 0.5,
    justifyContent: 'space-between',
  },
  image: {
    height: Dimensions.get('window').width / 2,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    marginTop: 3,
  },
  inStock: {
    fontStyle: 'italic',
    textAlign: 'right',
    color: 'red',
  },
  inner_container: {
    padding: 5,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
  },
});
