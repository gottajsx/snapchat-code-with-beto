import { Image, StyleSheet, Platform, View } from 'react-native';
import * as React from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { CameraView } from 'expo-camera';
import * as WebBrowser from 'expo-web-browser';

export default function HomeScreen() {
  const cameraRef = React.useRef<CameraView>(null)
  return (
    <View style={{flex: 1}}>
      <CameraView
        ref={cameraRef}
        style={{flex:1}}
      />
    </View>
  );
}
