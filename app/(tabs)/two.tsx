import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { View } from '@/components/Themed';
import axios from 'axios';
import {formatInTimeZone} from 'date-fns-tz';


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
  
  const API_KEY = process.env.SOCCER_API_KEY

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
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large"/>
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
              {item.homeTeam.shortName} vs {item.awayTeam.shortName} - {formatInTimeZone((new Date(item.utcDate)), 'America/Los_Angeles', 'HH:mm zzz')}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});