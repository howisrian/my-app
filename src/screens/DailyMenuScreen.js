import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import menuData from '../menu.json';
import { Ionicons } from '@expo/vector-icons';

const DailyMenuScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dailyMenu, setDailyMenu] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    const formattedDate = currentDate.toISOString().split('T')[0];
    const menu = menuData.find(item => item.date === formattedDate);
    setDailyMenu(menu ? menu.lunch : []);
  }, [currentDate]);

  const nextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const previousDay = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    setCurrentDate(previousDate);
  };

  const formattedDate = (date) => {
    const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
    const formatted = date.toLocaleDateString('pt-BR', options);
    if (date.toDateString() === new Date().toDateString()) {
      return 'Hoje';
    } else if (date.toDateString() === new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toDateString()) {
      return 'Amanhã';
    }
    return formatted;
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={[styles.container, { backgroundColor: '#F4F4F4' }]}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={previousDay} style={styles.navButton}>
          <Ionicons name="chevron-back-outline" size={24} color="#3066BE" />
        </TouchableOpacity>
        <Text style={styles.date}>{formattedDate(currentDate)}</Text>
        <TouchableOpacity onPress={nextDay} style={styles.navButton}>
          <Ionicons name="chevron-forward-outline" size={24} color="#3066BE" />
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Cardápio do Dia</Text>
        {dailyMenu.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum cardápio disponível para esta data.</Text>
        ) : (
          dailyMenu.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleItemClick(item)} style={styles.menuItemContainer}>
              <Text style={styles.menuItem}>{item.name}</Text>
              {selectedItem && selectedItem.name === item.name && (
                <Animated.View style={[styles.descriptionContainer, { opacity: animation }]}>
                  <Text style={styles.descriptionTitle}>Descrição:</Text>
                  <Text style={styles.descriptionText}>{item.description}</Text>
                  <TouchableOpacity onPress={fadeOut} style={styles.closeButton}>
                    <Ionicons name="close-circle" size={24} color="#3066BE" />
                  </TouchableOpacity>
                </Animated.View>
              )}
            </TouchableOpacity>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  navButton: {
    padding: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3066BE',
  },
  menuContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3066BE',
  },
  menuItemContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    color: '#3066BE',
  },
  descriptionContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3066BE',
  },
  descriptionText: {
    fontSize: 14,
    color: '#333333',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  emptyText: {
    fontSize: 16,
    color: '#3066BE',
  },
});

export default DailyMenuScreen;
