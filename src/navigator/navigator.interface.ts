import {LoginScreenParams} from './../components/login-screen/login-screen.interface';
import {HomeScreenParams} from './../components/home-screen/home-screen.interface';
export enum Routes {
  Home = 'Home',
  LoginScreen = 'LoginScreen',
}

export interface NavigationBase<R extends Routes, P> {
  route: R;
  params: P;
}

export type NavigationParams =
  | NavigationBase<Routes.Home, HomeScreenParams>
  | NavigationBase<Routes.LoginScreen, LoginScreenParams>;
