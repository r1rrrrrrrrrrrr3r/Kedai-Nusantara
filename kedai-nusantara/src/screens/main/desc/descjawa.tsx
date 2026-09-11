import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

export default function DescJawa() {
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

      <Image source={require('../../../../assets/KerakTelor.png')} style={styles.heroImage} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.title}>Kerak Telor</Text>
        <Text style={styles.originText}>
          Asal daerah: <Text style={styles.originValue}>Betawi, DKI Jakarta</Text>
        </Text>

        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <Text style={styles.paragraph}>
          Kerak telor adalah salah satu kudapan khas Betawi yang terkenal karena cita rasa gurih manis yang menggugah selera. Bisa dibilang, kerak telor sendiri sama terkenalnya dengan beragam kuliner khas Betawi lain seperti selendang mayang, kue rangi, gabus pucung, semur jengkol, asinan betawi dan masih banyak lagi.
        </Text>
        <Text style={styles.paragraph}>
          Terbuat dari beras ketan dan telur bebek atau ayam, dimasak bersama dengan berbagai bumbu dan bahan seperti bawang merah cincang halus, udang kering, bawang goreng, lada putih, garam dan sebagainya.
        </Text>

        <Text style={styles.sectionTitle}>Cara Memasak</Text>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            Kocok telur bebek, masukkan udang kering, bumbu yang dihaluskan, bawang goreng, dan kelapa sangrai. Aduk rata.
          </Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            Panaskan wajan dadar antilengket. Tuang setengah bagian ketan. Ratakan di permukaan wajan. Masak hingga setengah matang.
          </Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            Tuang setengah bagian telur kocok berbumbu. Ratakan di seluruh permukaan sambil ditekan-tekan. Setelah bagian bawahnya matang, dapat dibalik agar matang merata. Angkat.
          </Text>
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