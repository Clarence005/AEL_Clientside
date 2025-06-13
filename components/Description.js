
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Description() {
  return (
    <Text style={styles.description}>
     Canvas AEL now works with SSAI to turn passive streams into actionable revenue moments
    </Text>
  );
}

const styles = StyleSheet.create({
  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom:15
  },
});
