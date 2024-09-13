import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e90ff', // DodgerBlue
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
  },
});

//  <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="app/(tabs)/index.tsx" />
//     </View>
