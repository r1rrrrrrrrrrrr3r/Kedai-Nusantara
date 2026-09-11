import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder=""
          placeholderTextColor="#FFFFFF"
        />

        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder=""
          placeholderTextColor="#FFFFFF"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder=""
          placeholderTextColor="#FFFFFF"
          secureTextEntry
        />

        <View style={styles.linksRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkText}>Don't have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.linkText}>Forget password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Sign In</Text>
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
    paddingTop: 80,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
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
  linksRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  linkText: {
    color: '#6C7BFF',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#E8291C',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});