import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

const { width } = Dimensions.get('window');
const PAGE_WIDTH = width - 32;

const regionPages: { name: keyof RootStackParamList; label: string; image: any }[][] = [
  [
    { name: 'Jawa', label: 'Jawa', image: require('../../../assets/Jawa.png') },
    { name: 'Sumatera', label: 'Sumatera', image: require('../../../assets/Sumatera.png') },
    { name: 'Kalimantan', label: 'Kalimantan', image: require('../../../assets/Kalimantan.png') },
  ],
  [
    { name: 'Sulawesi', label: 'Sulawesi', image: require('../../../assets/Sulawesi.png') },
  ],
  [
    { name: 'Papua', label: 'Papua', image: require('../../../assets/Papua.png') },
  ],
];

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../../assets/IconProfile.png')} style={styles.profileIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Image source={require('../../../assets/IconSearch.png')} style={styles.searchIcon} resizeMode="contain" />
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          placeholderTextColor="#9A9A9A"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.bannerCard} onPress={() => navigation.navigate('List')}>
          <Image source={require('../../../assets/Semua.png')} style={styles.bannerImage} resizeMode="cover" />
          <Text style={styles.bannerLabel}>Semua</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Daerah Makanan</Text>

        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          {regionPages.map((page, pageIndex) => (
            <View key={pageIndex} style={[styles.page, { width: PAGE_WIDTH }]}>
              {page.length === 1 ? (
                <TouchableOpacity
                  style={styles.regionCardFull}
                  onPress={() => navigation.navigate(page[0].name)}
                >
                  <Image source={page[0].image} style={styles.regionImage} resizeMode="cover" />
                  <Text style={styles.regionLabel}>{page[0].label}</Text>
                </TouchableOpacity>
              ) : (
                <View>
                  <View style={styles.row}>
                    {page.slice(0, 2).map((region) => (
                      <TouchableOpacity
                        key={region.name}
                        style={styles.regionCardHalf}
                        onPress={() => navigation.navigate(region.name)}
                      >
                        <Image source={region.image} style={styles.regionImage} resizeMode="cover" />
                        <Text style={styles.regionLabel}>{region.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  {page.slice(2).map((region) => (
                    <TouchableOpacity
                      key={region.name}
                      style={styles.regionCardFull}
                      onPress={() => navigation.navigate(region.name)}
                    >
                      <Image source={region.image} style={styles.regionImage} resizeMode="cover" />
                      <Text style={styles.regionLabel}>{region.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: '#9A9A9A',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1A1A1A',
  },
  bannerCard: {
    width: '100%',
    height: 140,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerLabel: {
    position: 'absolute',
    bottom: 10,
    left: 12,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7A1F1F',
    marginBottom: 12,
  },
  page: {
    paddingBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  regionCardHalf: {
    width: '48%',
    height: 110,
    borderRadius: 12,
    overflow: 'hidden',
  },
  regionCardFull: {
    width: '100%',
    height: 110,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  regionImage: {
    width: '100%',
    height: '100%',
  },
  regionLabel: {
    position: 'absolute',
    bottom: 8,
    left: 10,
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});