import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from './src/screens/auth/authcontext';
import Start from './src/screens/auth/start';
import Login from './src/screens/auth/login';
import Register from './src/screens/auth/register';
import ForgetPassword from './src/screens/auth/forget_password';

import Home from './src/screens/main/home';
import List from './src/screens/main/list';
import Profile from './src/screens/main/profile';

import Jawa from './src/screens/main/list/jawa';
import Kalimantan from './src/screens/main/list/kalimantan';
import Papua from './src/screens/main/list/papua';
import Sulawesi from './src/screens/main/list/sulawesi';
import Sumatera from './src/screens/main/list/sumatera';

import KerakTelor from './src/screens/main/desc/jawa/desckeraktelor';
import Lumpia from './src/screens/main/desc/jawa/desclumpia';
import AsinanBogor from './src/screens/main/desc/jawa/descasinanbogor';
import SateMaranggi from './src/screens/main/desc/jawa/descsatemaranggi';
import RujakCingur from './src/screens/main/desc/jawa/descrujakcingur';

import Rendang from './src/screens/main/desc/sumatera/descrendang';
import BikaAmbon from './src/screens/main/desc/sumatera/descbikaambon';
import GulaiBelanca from './src/screens/main/desc/sumatera/descgulaibelanca';
import Pempek from './src/screens/main/desc/sumatera/descpempek';
import MieAceh from './src/screens/main/desc/sumatera/descmieaceh';

import BuburPedas from './src/screens/main/desc/kalimantan/descbuburpedas';
import KetupatKandangan from './src/screens/main/desc/kalimantan/descketupatkandangan';
import AyamCincane from './src/screens/main/desc/kalimantan/descayamcincane';
import NasiBekepor from './src/screens/main/desc/kalimantan/descnasibekepor';
import Pakasam from './src/screens/main/desc/kalimantan/descpakasam';

import PaPiong from './src/screens/main/desc/sulawesi/descpapiong';
import BuburManado from './src/screens/main/desc/sulawesi/descbuburmanado';
import Barongko from './src/screens/main/desc/sulawesi/descbarongko';
import KueCucur from './src/screens/main/desc/sulawesi/desckuecucur';
import Luluta from './src/screens/main/desc/sulawesi/descluluta';

import Papeda from './src/screens/main/desc/papua/descpapeda';
import IkanBakarManokwari from './src/screens/main/desc/papua/descikanbakarmanokwari';
import KueBagea from './src/screens/main/desc/papua/desckuebagea';
import KueLontar from './src/screens/main/desc/papua/desckuelontar';
import MartabakSagu from './src/screens/main/desc/papua/descmartabaksagu';

export type RootStackParamList = {
  Start: undefined;
  Login: undefined;
  Register: undefined;
  ForgetPassword: undefined;

  Home: undefined;
  List: undefined;
  Profile: undefined;

  Jawa: undefined;
  Kalimantan: undefined;
  Papua: undefined;
  Sulawesi: undefined;
  Sumatera: undefined;

  KerakTelor: undefined;
  Lumpia: undefined;
  AsinanBogor: undefined;
  SateMaranggi: undefined;
  RujakCingur: undefined;

  Rendang: undefined;
  BikaAmbon: undefined;
  GulaiBelanca: undefined;
  Pempek: undefined;
  MieAceh: undefined;

  BuburPedas: undefined;
  KetupatKandangan: undefined;
  AyamCincane: undefined;
  NasiBekepor: undefined;
  Pakasam: undefined;

  PaPiong: undefined;
  BuburManado: undefined;
  Barongko: undefined;
  KueCucur: undefined;
  Luluta: undefined;

  Papeda: undefined;
  IkanBakarManokwari: undefined;
  KueBagea: undefined;
  KueLontar: undefined;
  MartabakSagu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Jawa" component={Jawa} />
        <Stack.Screen name="Kalimantan" component={Kalimantan} />
        <Stack.Screen name="Papua" component={Papua} />
        <Stack.Screen name="Sulawesi" component={Sulawesi} />
        <Stack.Screen name="Sumatera" component={Sumatera} />

        <Stack.Screen name="KerakTelor" component={KerakTelor} />
        <Stack.Screen name="Lumpia" component={Lumpia} />
        <Stack.Screen name="AsinanBogor" component={AsinanBogor} />
        <Stack.Screen name="SateMaranggi" component={SateMaranggi} />
        <Stack.Screen name="RujakCingur" component={RujakCingur} />

        <Stack.Screen name="Rendang" component={Rendang} />
        <Stack.Screen name="BikaAmbon" component={BikaAmbon} />
        <Stack.Screen name="GulaiBelanca" component={GulaiBelanca} />
        <Stack.Screen name="Pempek" component={Pempek} />
        <Stack.Screen name="MieAceh" component={MieAceh} />

        <Stack.Screen name="BuburPedas" component={BuburPedas} />
        <Stack.Screen name="KetupatKandangan" component={KetupatKandangan} />
        <Stack.Screen name="AyamCincane" component={AyamCincane} />
        <Stack.Screen name="NasiBekepor" component={NasiBekepor} />
        <Stack.Screen name="Pakasam" component={Pakasam} />

        <Stack.Screen name="PaPiong" component={PaPiong} />
        <Stack.Screen name="BuburManado" component={BuburManado} />
        <Stack.Screen name="Barongko" component={Barongko} />
        <Stack.Screen name="KueCucur" component={KueCucur} />
        <Stack.Screen name="Luluta" component={Luluta} />

        <Stack.Screen name="Papeda" component={Papeda} />
        <Stack.Screen name="IkanBakarManokwari" component={IkanBakarManokwari} />
        <Stack.Screen name="KueBagea" component={KueBagea} />
        <Stack.Screen name="KueLontar" component={KueLontar} />
        <Stack.Screen name="MartabakSagu" component={MartabakSagu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}