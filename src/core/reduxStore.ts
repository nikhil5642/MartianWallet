import {walletSelectorSlice} from './../components/wallet-selector/wallets-selector.slice';
import {ChainSelectorInterFace} from './../components/chain-selector/chain-selector.interface';
import {chainSelectorSlice} from './../components/chain-selector/chain-selector.slice';
import {configureStore} from '@reduxjs/toolkit';
import {WalletSelectorInterFace} from '../components/wallet-selector/wallet-selector.interface';

export const reduxStore = configureStore({
  reducer: {
    chains: chainSelectorSlice.reducer,
    wallets: walletSelectorSlice.reducer,
  },
});

export interface ReduxInterface {
  chains: ChainSelectorInterFace;
  wallets: WalletSelectorInterFace;
}
