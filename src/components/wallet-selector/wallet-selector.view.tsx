import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Props} from '../../core/component';
import {ReduxInterface} from '../../core/reduxStore';
import {PopScreenAction} from '../../helper/navigation-helper';
import {TopDialog} from '../top-dialog/top-dialog.view';
import {WalletItem, WalletSelectorParams} from './wallet-selector.interface';
import {updateWallet} from './wallets-selector.slice';
import {styles} from './wallet-selector.styles';

export const WalletSelectorDialog: FC<Props<WalletSelectorParams>> = ({}) => {
  const selections = useSelector(
    (state: ReduxInterface) => state.wallets.selection,
  );
  const dispatch = useDispatch();
  const availableWallets: WalletItem[] = [
    {
      address: '0x6e....2ED0E',
    },
    {
      address: '0x6e....2EE0E',
    },
    {
      address: '0x6e....2EF0E',
    },
  ];

  return (
    <TopDialog>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Choose a Wallet</Text>
          <Pressable
            onPress={() => {
              PopScreenAction();
            }}
          >
            <Image
              style={styles.buttonClose}
              source={require('../../assets/top_sheet_close.png')}
            />
          </Pressable>
        </View>
        {availableWallets.map((item, index) => {
          return (
            <Pressable
              style={styles.itemContainer}
              onPress={() => {
                dispatch(updateWallet(item));
              }}
            >
              <Image
                style={styles.itemImage}
                source={require('../../assets/gradient.png')}
              />
              <Text style={styles.itemName}>
                Wallet {index + 1}{' '}
                <Text style={styles.itemAddress}>({item.address})</Text>
              </Text>
              <Image
                style={styles.itemRadioButton}
                source={
                  item.address === selections.address
                    ? require('../../assets/radio-button_selected.png')
                    : require('../../assets/radio_button_unselected.png')
                }
              />
            </Pressable>
          );
        })}

        <View style={styles.bottomOptionsContainer}>
          <Pressable style={styles.bottomItemContainer}>
            <Image
              style={styles.bottomItemImage}
              source={require('../../assets/wallet.png')}
            />

            <Text style={styles.bottomItemText}>Add Wallet</Text>
          </Pressable>
          <Pressable style={styles.bottomItemContainer}>
            <Image
              style={styles.bottomItemImage}
              source={require('../../assets/lock.png')}
            />
            <Text style={styles.bottomItemText}>Lock Martian</Text>
          </Pressable>
        </View>
      </View>
    </TopDialog>
  );
};
