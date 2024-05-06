// src/screens/WelcomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, { backgroundColor: '#ffffff' }]}>
      <Image source={require('../../assets/logo.gif')} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#3498db' }]}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={[styles.buttonText, { color: '#ffffff' }]}>Ver Cardápio do Dia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#3066be' }]} // Cor do botão de atualizar
          onPress={() => navigation.navigate('UpdateMenu')} // Navega para a tela UpdateMenuScreen
        >
          <Text style={[styles.buttonText, { color: '#ffffff' }]}>Atualizar Cardápio</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 


export default WelcomeScreen;
