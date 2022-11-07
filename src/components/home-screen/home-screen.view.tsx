import {FC} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from '../../core/component';
import {HomeScreenParams} from './home-screen.interface';

export const HomeScreenView: FC<Props<HomeScreenParams>> = ({}) => {
  return (
    <SafeAreaView>
      <Text>klasjf;alj</Text>
    </SafeAreaView>
  );
};
