import {init} from './wallet-selector.interface';
import {createSlice} from '@reduxjs/toolkit';

export const walletSelectorSlice = createSlice({
  name: 'wallets',
  initialState: init,
  reducers: {
    updateWallet: (state, action) => {
      return {...state, selection: action.payload};
    },
  },
});

export const {updateWallet} = walletSelectorSlice.actions;
