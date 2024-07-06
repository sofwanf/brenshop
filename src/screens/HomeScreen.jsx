import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {
  const products = [
    { id: '1', name: 'T-Shirt', price: 200000, image: 'https://example.com/tshirt.jpg' },
    { id: '2', name: 'Jeans', price: 300000, image: 'https://example.com/jeans.jpg' },
    // Tambahkan produk lainnya di sini
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Home"
        onCartPress={() => navigation.navigate('Cart')}
      />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  list: {
    padding: 10,
  },
});

export default HomeScreen;
