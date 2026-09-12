import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

export default function Start() {
  const fadeBlack = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    // Fade in dulu (tetap gelap)
    Animated.timing(fadeBlack, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      // Delay sebentar, lalu fade out
      setTimeout(() => {
        Animated.timing(fadeBlack, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }).start(() => {
          navigation.replace('Login');
        });
      }, 1000); // delay 1 detik sebelum mulai fade-out
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/BgStart.png')} style={styles.background} resizeMode="cover" />
      <View style={styles.overlay} />

      <View style={styles.logoContainer}>
        <View style={styles.circle}>
          <Image source={require('../../../assets/LogoAD.png')} style={styles.logo} resizeMode="contain" />
        </View>
        <Text style={styles.text}>AD PRODUCTION</Text>
      </View>

      <Animated.View style={[styles.fullScreenBlack, { opacity: fadeBlack }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#000',
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    color: '#FFD700',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  fullScreenBlack: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#000',
  },
});