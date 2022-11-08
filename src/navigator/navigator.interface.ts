import {ChainSelectorParams} from './../components/chain-selector/chain-selector.interface';
import {LoginScreenParams} from './../components/login-screen/login-screen.interface';
import {HomeScreenParams} from './../components/home-screen/home-screen.interface';
import {WalletSelectorParams} from '../components/wallet-selector/wallet-selector.interface';
export enum Routes {
  Home = 'Home',
  LoginScreen = 'LoginScreen',
  ChainSelectorDialog = 'ChainSelectorDialog',
  WalletSelectorDialog = 'WalletSelectorDialog',
}

export interface NavigationBase<R extends Routes, P> {
  route: R;
  params: P;
}

export type NavigationParams =
  | NavigationBase<Routes.Home, HomeScreenParams>
  | NavigationBase<Routes.LoginScreen, LoginScreenParams>
  | NavigationBase<Routes.ChainSelectorDialog, ChainSelectorParams>
  | NavigationBase<Routes.WalletSelectorDialog, WalletSelectorParams>;
