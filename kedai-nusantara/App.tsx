import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

import DescJawa from './src/screens/main/desc/descjawa';
import DescKalimantan from './src/screens/main/desc/desckalimantan';
import DescPapua from './src/screens/main/desc/descpapua';
import DescSulawesi from './src/screens/main/desc/descsulawesi';
import DescSumatera from './src/screens/main/desc/descsumatera';

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

  DescJawa: undefined;
  DescKalimantan: undefined;
  DescPapua: undefined;
  DescSulawesi: undefined;
  DescSumatera: undefined;
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

        <Stack.Screen name="DescJawa" component={DescJawa} />
        <Stack.Screen name="DescKalimantan" component={DescKalimantan} />
        <Stack.Screen name="DescPapua" component={DescPapua} />
        <Stack.Screen name="DescSulawesi" component={DescSulawesi} />
        <Stack.Screen name="DescSumatera" component={DescSumatera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}