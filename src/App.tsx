import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Routes} from './navigator/navigator.interface';
import {NavigatorView} from './navigator/navigator.view';

interface InitParams {
  route?: string;
  params?: Record<string, unknown>;
}

export default (p: InitParams) => {
  console.log(p);
  return (
    <SafeAreaProvider>
      <NavigatorView
        p={{
          route: Routes.LoginScreen,
          params: {},
        }}
      />
    </SafeAreaProvider>
  );
};
