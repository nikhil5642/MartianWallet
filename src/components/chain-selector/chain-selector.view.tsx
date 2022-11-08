import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Props} from '../../core/component';
import {ReduxInterface} from '../../core/reduxStore';
import {PopScreenAction} from '../../helper/navigation-helper';
import {TopDialog} from '../top-dialog/top-dialog.view';
import {ChainItem, ChainSelectorParams} from './chain-selector.interface';
import {updateChain} from './chain-selector.slice';
import {styles} from './chain-selector.styles';

export const ChainSelectorDialog: FC<Props<ChainSelectorParams>> = ({}) => {
  const selections = useSelector(
    (state: ReduxInterface) => state.chains.selection,
  );
  const dispatch = useDispatch();
  const availableChains: ChainItem[] = [
    {
      name: 'Aptos',
    },
    {
      name: 'Aptos Dev Net',
    },
  ];

  return (
    <TopDialog>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select a chain</Text>
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
        {availableChains.map(item => {
          return (
            <Pressable
              style={styles.itemContainer}
              onPress={() => {
                dispatch(updateChain(item));
              }}
            >
              <Image
                style={styles.itemImage}
                source={require('../../assets/aptos_logo_small.png')}
              />
              <Text style={styles.itemName}>{item.name}</Text>
              <Image
                style={styles.itemRadioButton}
                source={
                  item.name === selections.name
                    ? require('../../assets/radio-button_selected.png')
                    : require('../../assets/radio_button_unselected.png')
                }
              />
            </Pressable>
          );
        })}
      </View>
    </TopDialog>
  );
};
