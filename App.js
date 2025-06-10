import React from 'react';
import { View, StyleSheet,ScrollView,SafeAreaView,Platform,KeyboardAvoidingView} from 'react-native';
import GradientText from './components/GradientText';
import VideoPlayer from './components/VideoPlayer';
import Description from './components/Description';
import Logo from "./components/icons/CanvasLogo"


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
     <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.headerRow}>
    <Logo width={50} height={50} />
    <GradientText text="Hook them before they scroll" style={styles.headingRight} />
  </View>
      <Description />
      <VideoPlayer uri="https://ael-server.onrender.com/video.m3u8?showAd=false" />
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
  
 headerRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:'center',
  width: '100%',
  paddingTop: Platform.OS === 'android' ? 30 : 15,
  marginTop:10,
  marginBottom:25,
  paddingBottom: 10,
},

headingRight: {
  fontSize: 20,
  fontWeight: 'bold',
  marginLeft: 2,
  flexShrink: 1, 
},

});