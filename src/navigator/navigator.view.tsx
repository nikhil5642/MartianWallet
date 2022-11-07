import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from '../helper/navigation-helper';

import {NavigationParams, Routes} from './navigator.interface';
import {HomeScreenView} from '../components/home-screen/home-screen.view';
import {HomeScreenParams} from '../components/home-screen/home-screen.interface';
import {Props} from '../core/component';
import {LoginScreenView} from '../components/login-screen/login-screen.view';
import {LoginScreenParams} from '../components/login-screen/login-screen.interface';

const Stack = createStackNavigator();
const rootNavigatorScreenOptions = {headerShown: false};

export const NavigatorView: FC<Props<NavigationParams>> = ({p}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={p.route}
        mode="modal"
        screenOptions={rootNavigatorScreenOptions}
        headerMode="screen">
        <Stack.Screen name={Routes.Home}>
          {({route}) => (
            <HomeScreenView
              p={{...(p.params as HomeScreenParams), ...route.params}}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name={Routes.LoginScreen}>
          {({route}) => (
            <LoginScreenView
              p={{...(p.params as LoginScreenParams), ...route.params}}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
