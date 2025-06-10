import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function EmailFormModal({ visible, email, onEmailChange, onSubmit, onSkip }) {
  const [error, setError] = useState('');

  const handleSubmit = () => {
    // checking if the user enters the email 
    if (!email.trim()) {
      setError('Please enter the email');
      return;
    }
    setError('');
    onSubmit();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <BlurView intensity={120} tint="dark" style={StyleSheet.absoluteFill}>
        <View style={styles.overlay}>
          <Ionicons name="lock-closed-outline" size={50} color="white" style={{ marginBottom: 20 }} />

          <Text style={styles.title}>Enter Email to skip the upcoming Ad...</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => {
              onEmailChange(text);
              if (error) setError('');
            }}
            style={styles.input}
            placeholderTextColor="#ccc"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <LinearGradient
            colors={['#FD9D43', '#EDBF1B', '#3FD1CC', '#5B5FD1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonBorder}
          >
            <TouchableOpacity onPress={handleSubmit} style={styles.innerButton}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#FD9D43', '#EDBF1B', '#3FD1CC', '#5B5FD1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.buttonBorder, { marginTop: 12 }]}
          >
            <TouchableOpacity onPress={onSkip} style={styles.innerButton}>
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#ccc',
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 5,
    marginLeft: '5%',
  },
  input: {
    backgroundColor: '#222',
    width: '100%',
    padding: 12,
    marginBottom: 5,
    borderRadius: 30,
    color: 'white',
  },
  error: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: 10,
  },
  buttonBorder: {
    width: '60%',
    padding: 2.5,
    borderRadius: 30,
  },
  innerButton: {
    backgroundColor: '#000',
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
