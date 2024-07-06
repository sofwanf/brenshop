import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title, onCartPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.cartButton} onPress={onCartPress}>
        <Text style={styles.cartText}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onCartPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#007BFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 5,
  },
  cartText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
