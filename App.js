import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Platform, KeyboardAvoidingView } from 'react-native';
import GradientText from './components/GradientText';
import VideoPlayer from './components/VideoPlayer';
import Description from './components/Description';
import Logo from "./components/icons/CanvasLogo";

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoiding}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.headerRow}>
                        <View style={styles.logoContainer}>
                            <Logo width={50} height={50} />
                        </View>
                    </View>
                    <View style = {styles.MainRow}>
                        <View style={styles.textContainer}>
                            <GradientText
                                text="Stop Losing Viewers After the Play"
                                style={styles.headingRight}
                            />
                        </View>
                    </View>
                    <Description />
                    <VideoPlayer uri="https://ael-server.onrender.com/video.m3u8?showAd=false" style = {styles.playerStyle}/>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    keyboardAvoiding: {
        flex: 1,
    },
    container: {
        padding: 10,
        alignItems: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingTop: Platform.OS === 'android' ? 30 : 15,
        marginTop: 10,
        paddingLeft: 0,
    },
    MainRow: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 25,
    },
    logoContainer: {
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingRight: {
        padding: 20,
        fontSize: 30,
        fontWeight: 'bold',
        flexShrink: 1,
        marginTop: 10,
        textAlign: 'center',
    },
    playerStyle: {
        padding: 10,
    },
});

