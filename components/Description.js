
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Description() {
  return (
    <Text style={styles.description}>
      Experience Seamless First-Party Data Collection through AEL — Engage and Convert Effectively.
    </Text>
  );
}

const styles = StyleSheet.create({
  description: {
    color: '#fff',
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center',
  },
});
