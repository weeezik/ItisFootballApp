import React from 'react';
import { StyleSheet } from 'react-native';
import {Text, Card, Button} from 'react-native-paper';
import { Link } from 'expo-router';
import { View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineLarge" style={styles.title}>
          It's Football?
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          A soccer schedule built for US fans.
        </Text>
      </Card.Content>
    </Card>

    <Link href="/(tabs)/two" asChild>
      <Button
        mode="contained"
        style={styles.button}
        buttonColor="#1e90ff"
        contentStyle={styles.buttonContent}
      >
        View Games
      </Button>
    </Link>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 4, // Shadow for Android
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#1e90ff',
  },
  subtitle: {
    textAlign: 'center',
    color: '#333',
  },
  button: {
    marginTop: 20,
    borderRadius: 25,
  },
  buttonContent: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});