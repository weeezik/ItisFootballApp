import React from 'react';
import { StyleSheet, Button, Dimensions } from 'react-native';
import { Link } from 'expo-router';

import { Text, View } from '@/components/Themed';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>It's Football?</Text>
      <Text>A soccer schedule built for US fans.</Text>
      <Link href="/(tabs)/two" asChild>
        <Button title="View Games"/>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background
    padding: 20,
  },
  textContainer: {
    flex: 1, // Allow this container to grow and fill available space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  title: {
    fontSize: width * 0.1, // Responsive font size based on screen width
    fontWeight: 'bold',
    color: '#1e90ff', // DodgerBlue
    textAlign: 'center', // Center text
  },
  subtitle: {
    fontSize: width * 0.05, // Responsive font size based on screen width
    marginVertical: 10,
    color: '#333',
    textAlign: 'center', // Center text
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#1e90ff', // Button background color
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});