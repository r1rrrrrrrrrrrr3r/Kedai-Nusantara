import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

export default function DescSumatera() {
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

      <Image source={require('../../../../assets/Rendang.png')} style={styles.heroImage} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.title}>Rendang</Text>
        <Text style={styles.originText}>
          Asal daerah: <Text style={styles.originValue}>Minangkabau, Sumatera Barat</Text>
        </Text>

        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <Text style={styles.paragraph}>
          Rendang adalah salah satu masakan tradisional Minangkabau yang menggunakan daging dan santan kelapa sebagai bahan utama dengan kandungan bumbu yang kaya akan rempah-rempah.
        </Text>
        <Text style={styles.paragraph}>
          Terbuat dari daging dan dimasak dalam suhu rendah selama berjam-jam dengan berbagai rempah-rempah dan santan. Proses memasak memakan waktu berjam-jam hingga yang tinggal hanyalah potongan daging berwarna hitam pekat dan dedak.
        </Text>

        <Text style={styles.sectionTitle}>Cara Memasak</Text>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Pertama-tama, tumis bumbu halus dan kelapa parut sangrai. Aduk rata.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Kemudian, masukkan daun salam, daun jeruk, daun kunyit, dan serai. Masak hingga wangi.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Setelah itu, masukkan daging. Aduk rata.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Tuang santan. Aduk rata.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Masak rendang dengan api kecil hingga rendang mengering. Rendang daging sapi siap kamu sajikan untuk acara spesial.</Text>
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