import React from 'react';
import { View, StyleSheet,ScrollView,SafeAreaView,Platform,KeyboardAvoidingView} from 'react-native';
import GradientText from './components/GradientText';
import VideoPlayer from './components/VideoPlayer';
import Description from './components/Description';



export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
     <ScrollView contentContainerStyle={styles.container}>
      <GradientText text="Hook them before they scroll " style={styles.heading} />
      <Description />
      <VideoPlayer uri="http://192.168.57.72:8000/video.m3u8?showAd=false" />
    </ScrollView>
    </KeyboardAvoidingView>
     </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
});