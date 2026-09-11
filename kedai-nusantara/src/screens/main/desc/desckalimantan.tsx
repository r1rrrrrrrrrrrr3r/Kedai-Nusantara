import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

export default function DescKalimantan() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../../../assets/IconProfile.png')} style={styles.profileIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <Image source={require('../../../../assets/AyamCincane.png')} style={styles.heroImage} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.title}>Ayam Cincane</Text>
        <Text style={styles.originText}>
          Asal daerah: <Text style={styles.originValue}>Samarinda, Kalimantan Timur</Text>
        </Text>

        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <Text style={styles.paragraph}>
          Ayam Cincane adalah masakan khas Kalimantan Timur. Hidangan ini sering dijumpai pada acara-acara besar, seperti pesta pernikahan dan acara penyambutan tamu-tamu kehormatan. Selain itu, masakan ini juga dapat dijumpai di beberapa kedai ataupun rumah makan.
        </Text>
        <Text style={styles.paragraph}>
          Daging ayam kampung yang disajikan bersama bumbu berwarna kemerahan menjadi ciri khas tersendiri dari menu ayam cincane.
        </Text>

        <Text style={styles.sectionTitle}>Cara Memasak</Text>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Tumis bumbu halus hingga harum, tambahkan daun salam dan serai, masak hingga bumbu matang.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Masukkan potongan ayam, aduk-aduk, masak hingga ayam berubah warna. Tambahkan jahe, lengkuas, gula merah, dan garam, aduk-aduk.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Tuangi santan, aduk perlahan, masak hingga santan habis atau mengering.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Panggang ayam di atas bara hingga matang kecokelatan. Bisa juga dipanggang di oven dengan suhu 180 derajat celsius selama 35 menit. Angkat dan sajikan.</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  backArrow: {
    fontSize: 22,
    color: '#1A1A1A',
  },
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 18,
    height: 18,
    tintColor: '#FFFFFF',
  },
  heroImage: {
    width: '100%',
    height: 220,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  originText: {
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  originValue: {
    color: '#C62828',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 12,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#3A3A3A',
    marginBottom: 12,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  bulletDot: {
    fontSize: 14,
    color: '#3A3A3A',
    marginRight: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
    color: '#3A3A3A',
  },
});