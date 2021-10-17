import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import products_data from './products.json';
import ProductCard from './components/ProductCard';
function App() {
  const [text, onChangeText] = React.useState();
  const renderProducts = ({ item }) => <ProductCard  products={item} />;

  return (
    <View >
      <Text style={styles.baseText}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ara..."
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          data={products_data}
          renderItem={renderProducts}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  baseText: {
    fontSize: 22,
    color: 'purple',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 15,
  },
  input: {
    height: 40,
    padding: 10,
    margin: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#e9ecef',
  },
});

export default App;
