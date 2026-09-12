import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

const foods = [
  {
    name: 'Bubur Pedas Sambas',
    origin: 'Sambas, Kalimantan Barat',
    image: require('../../../../assets/BuburPedasSambas.png'),
    desc: null,
  },
  {
    name: 'Ketupat Kandangan',
    origin: 'Kandangan, Kalimantan Selatan',
    image: require('../../../../assets/KetupatKandangan.png'),
    desc: null,
  },
  {
    name: 'Ayam Cincane',
    origin: 'Samarinda, Kalimantan Timur',
    image: require('../../../../assets/AyamCincane.png'),
    desc: 'DescKalimantan' as keyof RootStackParamList,
  },
  {
    name: 'Nasi Bekepor',
    origin: 'Kutai, Kalimantan Timur',
    image: require('../../../../assets/NasiBekepor.png'),
    desc: null,
  },
  {
    name: 'Pakasam',
    origin: 'Banjar, Kalimantan Selatan',
    image: require('../../../../assets/Pakasam.png'),
    desc: null,
  },
];

export default function Kalimantan() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [search, setSearch] = useState('');

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../../assets/ArrowBlack.png')}
            style={styles.backArrowIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Kalimantan</Text>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../../../assets/IconProfile.png')}
            style={styles.profileIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Image
          source={require('../../../../assets/IconSearch.png')}
          style={styles.searchIcon}
          resizeMode="contain"
        />
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          placeholderTextColor="#9A9A9A"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredFoods.map((food) => {
          const Wrapper = food.desc ? TouchableOpacity : View;
          return (
            <Wrapper
              key={food.name}
              style={styles.foodCard}
              onPress={food.desc ? () => navigation.navigate(food.desc as keyof RootStackParamList) : undefined}
            >
              <Image source={food.image} style={styles.foodImage} resizeMode="cover" />
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodOrigin}>{food.origin}</Text>
            </Wrapper>
          );
        })}
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 2,
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
  foodCard: {
    marginBottom: 20,
  },
  foodImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 8,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  foodOrigin: {
    fontSize: 13,
    color: '#6A6A6A',
  },
});