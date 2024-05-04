// src/screens/UpdateMenuScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

const UpdateMenuScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [pratoNome, setPratoNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSave = () => {
    if (selectedDate && pratoNome && descricao) {
      // Aqui você pode salvar os dados no JSON ou no banco de dados
      setModalVisible(false);
      setSelectedDate('');
      setPratoNome('');
      setDescricao('');
      Alert.alert('Salvo!', 'O prato foi atualizado com sucesso.');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualizar Cardápio</Text>
      <TouchableOpacity style={styles.datePicker} onPress={() => setModalVisible(true)}>
        <Text style={styles.datePickerText}>{selectedDate ? selectedDate : 'Selecione a data'}</Text>
        <Ionicons name="calendar-outline" size={24} color="#3066BE" style={styles.icon} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Prato</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do Prato"
              value={pratoNome}
              onChangeText={text => setPratoNome(text)}
            />
            <TextInput
              style={[styles.input, { height: 100 }]}
              placeholder="Descrição"
              multiline={true}
              value={descricao}
              onChangeText={text => setDescricao(text)}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#3066BE' }]}
                onPress={handleSave}
              >
                <Text style={styles.modalButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#C62828' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3066BE',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  datePickerText: {
    flex: 1,
    fontSize: 16,
    color: '#3066BE',
  },
  icon: {
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3066BE',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default UpdateMenuScreen;
