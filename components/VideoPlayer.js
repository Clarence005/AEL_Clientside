import React, { useRef, useState } from 'react';
import { View, StyleSheet, Modal, TextInput, Text, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

import EmailFormModal from '../components/EmailFormModal';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isLandscape = width > height;
export default function VideoPlayer({ uri }) {
  const video = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [currentUri, setCurrentUri] = useState(uri);
  const [status, setStatus] = useState({});
  const [formShownOnce, setFormShownOnce] = useState(false);

  const handleProgress = (status) => {
    if (status.positionMillis >= 4450 && !formShownOnce) {
      // if the video reaches the 6th second show the form
      video.current.pauseAsync();
      setShowForm(true);
      setFormShownOnce(true);
    }
    setStatus(status);
  };

  const handleSkip = () => {
    // if the user skip get the current position of the vedio and loading the merged m3u8 file by sending the showAd as true
    const currentTime = status.positionMillis;
    setShowForm(false);
    setCurrentUri('http://192.168.145.102:8000/video.m3u8?showAd=true');
    setTimeout(() => {
    if (video.current) {
      video.current.playFromPositionAsync(currentTime);
    }
  }, 500); 
  };

  const handleSubmit = () => {
    // if the user submit the form resume the video
    setShowForm(false);
    video.current.playAsync();
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={{ uri: currentUri }}
        style={styles.video}
        useNativeControls
        resizeMode="cover"
        onPlaybackStatusUpdate={handleProgress}
        shouldPlay={!showForm}
      />

      <EmailFormModal
        visible={showForm}
        email={email}
        onEmailChange={setEmail}
        onSubmit={handleSubmit}
        onSkip={handleSkip}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
    height: isLandscape ? height * 0.6 : width * (9 / 16), // Adaptive height
    marginTop: isLandscape ? 20 : 50,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
