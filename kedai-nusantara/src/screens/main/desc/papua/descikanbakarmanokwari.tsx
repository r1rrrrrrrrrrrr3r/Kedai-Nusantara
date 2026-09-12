import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../App';

export default function DescIkanBakarManokwari() {
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

      <Image source={require('../../../../../assets/IkanBakarManokwari.png')} style={styles.heroImage} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.title}>Ikan Bakar Manokwari</Text>
        <Text style={styles.originText}>
          Asal daerah: <Text style={styles.originValue}>Manokwari, Papua Barat</Text>
        </Text>

        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <Text style={styles.paragraph}>
          Ikan bakar manokwari menyajikan cita rasa khas pesisir Papua yang menitikberatkan pada kesegaran ikan laut seperti tongkol atau kakap. Keunikan hidangan ini terletak pada sambal mentah siram yang dilumatkan secara kasar tanpa dimasak.
        </Text>
        <Text style={styles.paragraph}>
          Sambal giling tersebut memadukan cabai rawit merah segar, bawang merah, garam, dan perasan jeruk nipis lokal dalam takaran banyak. Sensasi rasa pedas yang membakar dan keasaman sitrus yang tajam menembus daging ikan bakar yang gurih dan harum asap.
        </Text>

        <Text style={styles.sectionTitle}>Cara Memasak</Text>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            Bersihkan ikan tongkol segar, kerat bagian badannya, lalu lumuri dengan perasan air jeruk nipis dan garam secukupnya untuk menghilangkan aroma amis.
          </Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            Panggang ikan di atas bara api arang batok kelapa sambil sesekali dibalik hingga matang kering di luar dan lembut di dalam.
          </Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            Ulek kasar cabai rawit merah, bawang merah, garam, dan sedikit penyedap rasa di atas cobek batu.
          </Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            Siramkan perasan jeruk nipis ke atas sambal kasar, lalu ratakan sambal mentah tersebut menutupi seluruh permukaan ikan bakar yang masih panas sebelum dihidangkan.
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