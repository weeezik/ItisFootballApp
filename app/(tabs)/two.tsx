import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';

interface Game {
  id: string;
  homeTeam: string;
  awayTeam: string;
  utcDate: string;
}

export default function TabTwoScreen() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const API_KEY = 'f34d766754ca4538a9219fe8caf15124'

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api.football-data.org/v4/matches', {
          headers: { 'X-Auth-Token': API_KEY },
        });
        setGames(response.data.matches);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);
  
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading games...</Text>
      </View>
    );
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Games</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.gameContainer}>
            <Text style={styles.gameText}>
              {item.homeTeam.shortName} vs {item.awayTeam.shortName} - {new Date(item.utcDate).toLocaleString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

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
