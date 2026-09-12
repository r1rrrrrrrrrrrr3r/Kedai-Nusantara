import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../App';

export default function DescSulawesi() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../../../assets/ArrowBlack.png')}
            style={styles.backArrowIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../../../../assets/IconProfile.png')}
            style={styles.profileIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <Image source={require('../../../../../assets/BuburManado.png')} style={styles.heroImage} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.title}>Bubur Manado</Text>
        <Text style={styles.originText}>
          Asal daerah: <Text style={styles.originValue}>Manado, Sulawesi Utara</Text>
        </Text>

        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <Text style={styles.paragraph}>
          Tinutuan atau juga dikenal sebagai Bubur Manado merupakan makanan tradisional dari daerah Sulawesi Utara, khususnya Manado dan Minahasa yang dapat dikembangkan untuk menjadi bagian penting dari wisata kuliner di daerah ini. Ada juga yang mengatakan tinutuan adalah makanan khas Minahasa, Sulawesi Utara.
        </Text>
        <Text style={styles.paragraph}>
          Tinutuan merupakan campuran berbagai macam sayuran, tidak mengandung daging, sehingga makanan ini bisa menjadi makanan pergaulan antarkelompok masyarakat di Manado. Tinutuan biasanya disajikan untuk sarapan pagi beserta berbagai pelengkap hidangannya. Walaupun demikian, tinutuan umumnya tetap dapat ditemukan di berbagai rumah makan di luar waktu sarapan.
        </Text>

        <Text style={styles.sectionTitle}>Cara Memasak</Text>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Masak beras, air, serai, jahe, dan garam sampai matang dan mengental, jika kurang air tambahkan air panas.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Masukkan jagung, aduk, lalu masukkan ubi, daun melinjo, dan kacang panjang sampai ubi matang, terakhir masukkan bayam, kangkung, daun gedi, dan daun kemangi, aduk-aduk sampai matang.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Hidangkan selagi panas di dalam mangkuk dengan pelengkapnya.</Text>
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
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrowIcon: {
    width: 16,
    height: 16,
  },
  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 66,
    height: 66,
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