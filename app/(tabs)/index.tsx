import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import {Text, Card, Button} from 'react-native-paper';
import { Link } from 'expo-router';
import { View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

export default function TabOneScreen() {
  const [selectedTimezone, setSelectedTimezone] = useState<string | null>(null);

  // Save the user's timezone selection locally
  const handleTimezoneChange = async (timezone: string) => {
    setSelectedTimezone(timezone);
    await AsyncStorage.setItem('userTimezone', timezone); // Save to local storage
  };

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

    {/* Timezone Picker */}
    <Text style={styles.subtitle}>Select Your Time Zone:</Text>
      <Picker
        selectedValue={selectedTimezone}
        onValueChange={(itemValue) => handleTimezoneChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Pacific Time (PT)" value="America/Los_Angeles" />
        <Picker.Item label="Mountain Time (MT)" value="America/Denver" />
        <Picker.Item label="Central Time (CT)" value="America/Chicago" />
        <Picker.Item label="Eastern Time (ET)" value="America/New_York" />
      </Picker>


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
  picker: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
});