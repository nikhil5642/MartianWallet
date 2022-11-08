import React, {useEffect} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, useDispatch} from 'react-redux';
import {updateChain} from './components/chain-selector/chain-selector.slice';
import {updateWallet} from './components/wallet-selector/wallets-selector.slice';
import {reduxStore} from './core/reduxStore';

import {Routes} from './navigator/navigator.interface';
import {NavigatorView} from './navigator/navigator.view';

interface InitParams {
  route?: string;
  params?: Record<string, unknown>;
}

const AppScren = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateChain({name: 'Aptos'}));
    dispatch(
      updateWallet({
        address: '0x6e....2ED0E',
      }),
    );
  });
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

export default (p: InitParams) => {
  console.log(p);

  return (
    <Provider store={reduxStore}>
      <AppScren />
    </Provider>
  );
};
