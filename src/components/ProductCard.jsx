import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';

const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>Rp {product.price.toLocaleString()}</Text>
        <Button title="Detail" onPress={onPress} style={styles.button} />
      </View>
    </TouchableOpacity>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});

export default ProductCard;
