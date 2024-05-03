import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import menuData from '../menu.json';

const DailyMenuScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dailyMenu, setDailyMenu] = useState([]);

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

  return (
    <View style={[styles.container, { backgroundColor: '#3498db' }]}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={previousDay} style={styles.navButton}>
          <Text style={styles.navText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.date}>{formattedDate(currentDate)}</Text>
        <TouchableOpacity onPress={nextDay} style={styles.navButton}>
          <Text style={styles.navText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Cardápio do Dia</Text>
        {dailyMenu.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum cardápio disponível para esta data.</Text>
        ) : (
          dailyMenu.map((item, index) => (
            <View key={index} style={styles.menuItemContainer}>
              <Text style={styles.menuItem}>{item}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  navButton: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 10,
  },
  navText: {
    fontSize: 24,
    color: '#3498db',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  menuContainer: {
    marginTop: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  menuItemContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 16,
    color: '#3498db',
  },
  emptyText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default DailyMenuScreen;
