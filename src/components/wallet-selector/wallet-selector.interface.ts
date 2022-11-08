export interface WalletSelectorInterFace {
  selection: WalletItem;
}

export type WalletSelectorParams = {};

export interface WalletItem {
  address: string;
}

export const init: WalletSelectorInterFace = {
  selection: {address: ''},
};
