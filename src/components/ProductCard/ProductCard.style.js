import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e9ecef',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
  inner_container: {padding: 5},
});
