import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from '../../core/component';
import {LoginScreenParams} from './login-screen.interface';
import {styles} from './login-screen.style';

export const LoginScreenView: FC<Props<LoginScreenParams>> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/martian_logo_big.png')}
        />
        <Image
          style={styles.logoText}
          source={require('../../assets/Martian.png')}
        />
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder={'ENTER YOUR PASSWORD'}
          placeholderTextColor={'#818181'}
        />
        <Pressable style={styles.unlockButton}>
          <Text style={styles.unlockButtonText}>UNLOCK</Text>
        </Pressable>
      </View>
      <Text />
    </SafeAreaView>
  );
};
