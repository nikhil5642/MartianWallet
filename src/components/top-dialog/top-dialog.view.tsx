import {StyleSheet, View} from 'react-native';
import React from 'react';
import {PropsChildOnly} from '../../core/component';
import {SafeAreaView} from 'react-native-safe-area-context';

export const TopDialog: React.FC<PropsChildOnly> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomShadow}>
        <View style={styles.childContainer}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  bottomShadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
  },
});
