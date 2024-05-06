// src/screens/WelcomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, { backgroundColor: '#ffffff' }]}>
      <Image source={require('../../assets/logo.gif')} style={styles.logo} />
      <Text style={[styles.title, { color: '#3498db' }]}>Bem-vindo ao Xilo App!</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#3498db' }]}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={[styles.buttonText, { color: '#ffffff' }]}>Ver Cardápio do Dia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 


export default WelcomeScreen;