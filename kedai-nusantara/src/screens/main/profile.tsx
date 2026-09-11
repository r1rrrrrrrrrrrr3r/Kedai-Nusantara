import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

export default function Profile() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerImageWrapper}>
        <Image source={require('../../../assets/ProfileHeader.png')} style={styles.headerImage} resizeMode="cover" />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.avatarWrapper}>
          <Image source={require('../../../assets/AvatarDefault.png')} style={styles.avatar} resizeMode="cover" />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Nama</Text>
        <View style={styles.fieldBox}>
          <Text style={styles.fieldValue}>Budi</Text>
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.fieldBox}>
          <Text style={styles.fieldValue}>budikedainusantara@gmail.com</Text>
        </View>

        <Text style={styles.label}>Nomor Telepon</Text>
        <View style={styles.fieldBox}>
          <Text style={styles.fieldValue}>08123456789</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerImageWrapper: {
    width: '100%',
    height: 160,
    marginBottom: 70,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 20,
    color: '#1A1A1A',
  },
  headerTitle: {
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  avatarWrapper: {
    position: 'absolute',
    bottom: -60,
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  avatar: {
    width: 108,
    height: 108,
    borderRadius: 54,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
    marginTop: 20,
  },
  fieldBox: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: '#FAFAFA',
  },
  fieldValue: {
    fontSize: 15,
    color: '#1A1A1A',
  },
});