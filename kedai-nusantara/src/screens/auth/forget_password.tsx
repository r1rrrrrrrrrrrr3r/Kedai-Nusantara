import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

export default function ForgetPassword() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/BgAuth.png')} style={styles.background} resizeMode="cover" />
      <View style={styles.overlay} />

      <View style={styles.logoWrapper}>
        <View style={styles.logoCircle}>
          <Image source={require('../../../assets/LogoKedaiNusantara.png')} style={styles.logo} resizeMode="contain" />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Forget Password</Text>
        </View>

        <Text style={styles.label}>Email Adress</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder=""
          placeholderTextColor="#FFFFFF"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder=""
          placeholderTextColor="#FFFFFF"
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder=""
          placeholderTextColor="#FFFFFF"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: 40,
  },
  logoCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  logo: {
    width: 100,
    height: 100,
  },
  card: {
    flex: 1,
    marginTop: -60,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 22,
    marginRight: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#E8291C',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});