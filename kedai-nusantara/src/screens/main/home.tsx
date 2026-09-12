import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { useAuth } from '../auth/authcontext';

const { width } = Dimensions.get('window');
const PAGE_WIDTH = width - 32;

const topRegions: { name: keyof RootStackParamList; label: string; image: any }[] = [
  { name: 'Jawa', label: 'Jawa', image: require('../../../assets/Jawa.png') },
  { name: 'Sumatera', label: 'Sumatera', image: require('../../../assets/Sumatera.png') },
];

const bottomSliders: { name: keyof RootStackParamList; label: string; image: any }[] = [
  { name: 'Kalimantan', label: 'Kalimantan', image: require('../../../assets/Kalimantan.png') },
  { name: 'Sulawesi', label: 'Sulawesi', image: require('../../../assets/Sulawesi.png') },
  { name: 'Papua', label: 'Papua', image: require('../../../assets/Papua.png') },
];

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { currentUser } = useAuth();
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef<ScrollView>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const stopAutoScroll = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    timerRef.current = setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % bottomSliders.length;
      sliderRef.current?.scrollTo({
        x: nextIndex * PAGE_WIDTH,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, 3500);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handleScrollBeginDrag = () => {
    stopAutoScroll();
  };

  const handleScrollEndDrag = () => {
    startAutoScroll();
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / PAGE_WIDTH);
    setActiveIndex(currentIndex);
    startAutoScroll();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText} numberOfLines={1}>
          Welcome, {currentUser?.name || 'User'}!
        </Text>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image
            source={require('../../../assets/IconProfile.png')}
            style={styles.profileIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Image
          source={require('../../../assets/IconSearch.png')}
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
        <TouchableOpacity
          style={styles.bannerCard}
          onPress={() => navigation.navigate('List')}
        >
          <Image
            source={require('../../../assets/Semua.png')}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <Text style={styles.bannerLabel}>Semua</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Daerah Makanan</Text>

        <View style={styles.row}>
          {topRegions.map((region) => (
            <TouchableOpacity
              key={region.name}
              style={styles.regionCardHalf}
              onPress={() => navigation.navigate(region.name as never)}
            >
              <Image source={region.image} style={styles.regionImage} resizeMode="cover" />
              <Text style={styles.regionLabel}>{region.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView
          ref={sliderRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={PAGE_WIDTH}
          snapToAlignment="start"
          decelerationRate="fast"
          disableIntervalMomentum={true}
          nestedScrollEnabled={true}
          onScrollBeginDrag={handleScrollBeginDrag}
          onScrollEndDrag={handleScrollEndDrag}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        >
          {bottomSliders.map((region) => (
            <View key={region.name} style={{ width: PAGE_WIDTH }}>
              <TouchableOpacity
                style={styles.regionCardFull}
                onPress={() => navigation.navigate(region.name as never)}
              >
                <Image source={region.image} style={styles.regionImage} resizeMode="cover" />
                <Text style={styles.regionLabel}>{region.label}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.indicatorContainer}>
          {bottomSliders.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
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
    flex: 1,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
    paddingTop: 20,
  },
  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 32,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
  bannerCard: {
    width: '100%',
    height: 190,
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
    bottom: 12,
    left: 14,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  regionCardHalf: {
    width: '48%',
    height: 250,
    borderRadius: 12,
    overflow: 'hidden',
  },
  regionCardFull: {
    width: '100%',
    height: 170,
    borderRadius: 12,
    overflow: 'hidden',
  },
  regionImage: {
    width: '100%',
    height: '100%',
  },
  regionLabel: {
    position: 'absolute',
    bottom: 10,
    left: 12,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  dot: {
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  activeDot: {
    width: 20,
    backgroundColor: '#1A1A1A',
  },
  inactiveDot: {
    width: 6,
    backgroundColor: '#D1D5DB',
  },
});