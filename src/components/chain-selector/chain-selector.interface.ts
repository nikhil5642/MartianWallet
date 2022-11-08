export interface ChainSelectorInterFace {
  selection: ChainItem;
}

export type ChainSelectorParams = {};

export interface ChainItem {
  name: string;
}

export const init: ChainSelectorInterFace = {
  selection: {name: ''},
};
