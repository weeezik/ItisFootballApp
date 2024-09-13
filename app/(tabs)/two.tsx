import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

interface Game {
  id: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
}

export default function TabTwoScreen() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setGames([
        { id: '1', homeTeam: 'Team A', awayTeam: 'Team B', time: '12:00 PM' },
        { id: '2', homeTeam: 'Team C', awayTeam: 'Team D', time: '3:00 PM' },
        { id: '3', homeTeam: 'Team E', awayTeam: 'Team F', time: '6:00 PM' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading games...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Games</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.gameContainer}>
            <Text style={styles.gameText}>
              {item.homeTeam} vs {item.awayTeam} - {item.time}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 20,
  },
  gameContainer: {
    backgroundColor: '#f0f8ff', // Light blue background
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  gameText: {
    fontSize: 18,
    color: '#333',
  },
});
