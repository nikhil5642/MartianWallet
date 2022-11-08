import {init} from './chain-selector.interface';
import {createSlice} from '@reduxjs/toolkit';

export const chainSelectorSlice = createSlice({
  name: 'chains',
  initialState: init,
  reducers: {
    updateChain: (state, action) => {
      return {...state, selection: action.payload};
    },
  },
});

export const {updateChain} = chainSelectorSlice.actions;
