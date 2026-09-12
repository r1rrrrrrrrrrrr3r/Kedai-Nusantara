import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { useAuth } from './authcontext';

export default function ForgetPassword() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { resetPassword } = useAuth();

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isValidGmail = (value: string) => {
    const cleaned = value.trim().toLowerCase();
    return cleaned.endsWith('@gmail.com') && cleaned.indexOf('@') > 0;
  };

  const handleResetPassword = () => {
    if (!email.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    if (!isValidGmail(email)) {
      Alert.alert('Invalid Email', 'Please use a valid email ending with @gmail.com');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    const result = resetPassword(email.trim(), newPassword.trim());
    Alert.alert(result.success ? 'Success' : 'Error', result.message);

    if (result.success) {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/BgAuth.png')} style={styles.background} resizeMode="cover" />

      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.logoWrapper} pointerEvents="none">
            <View style={styles.logoCircle}>
              <Image source={require('../../../assets/LogoKedaiNusantara.png')} style={styles.logo} resizeMode="contain" />
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.headerRow}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../../assets/ArrowWhite.png')} style={styles.backArrow} resizeMode="contain" />
              </TouchableOpacity>
              <Text style={styles.title}>Forget Password</Text>
            </View>

            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#FFFFFF"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>New Password</Text>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholderTextColor="#FFFFFF"
              secureTextEntry
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholderTextColor="#FFFFFF"
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  logoWrapper: {
    alignItems: 'center',
    zIndex: 2,
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
    marginTop: -60,
    marginHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  backArrow: {
    width: 19,
    height: 19,
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