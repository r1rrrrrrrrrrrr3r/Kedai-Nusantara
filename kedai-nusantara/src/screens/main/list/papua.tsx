import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

const foods = [
  {
    name: 'Papeda',
    origin: 'Papua Barat',
    image: require('../../../../assets/Papeda.png'),
    desc: null,
  },
  {
    name: 'Ikan Bakar Manokwari',
    origin: 'Manokwari, Papua Barat',
    image: require('../../../../assets/IkanBakarManokwari.png'),
    desc: null,
  },
  {
    name: 'Kue Bagea',
    origin: 'Papua Tengah',
    image: require('../../../../assets/KueBagea.png'),
    desc: null,
  },
  {
    name: 'Kue Lontar',
    origin: 'Papua',
    image: require('../../../../assets/KueLontar.png'),
    desc: 'DescPapua' as keyof RootStackParamList,
  },
  {
    name: 'Martabak Sagu',
    origin: 'Fak-Fak, Papua Barat',
    image: require('../../../../assets/MartabakSagu.png'),
    desc: null,
  },
];

export default function Papua() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Papua</Text>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../../../assets/IconProfile.png')} style={styles.profileIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Image source={require('../../../../assets/IconSearch.png')} style={styles.searchIcon} resizeMode="contain" />
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          placeholderTextColor="#9A9A9A"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food) => {
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
  backArrow: {
    fontSize: 22,
    color: '#1A1A1A',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7A1F1F',
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