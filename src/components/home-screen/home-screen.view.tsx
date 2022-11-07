import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from '../../core/component';
import {HomeScreenParams, PortFolioItem} from './home-screen.interface';
import {styles} from './home-screen.styles';

export const HomeScreenView: FC<Props<HomeScreenParams>> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <WalletSelector />
        <PortFolioValue />
        <BuySendButtons />
        <PortFolio />
      </View>
      <BottomNavigation />
    </SafeAreaView>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.chainSelectorContainer}>
        <Image
          style={styles.chainLogo}
          source={require('../../assets/aptos_logo_small.png')}
        />
        <Text style={styles.chainText}>Aptos</Text>
        <Image
          style={styles.chainDropdown}
          source={require('../../assets/down_arrow.png')}
        />
      </View>
      <View style={styles.notificationBellContainer}>
        <Image
          style={styles.notificationBell}
          source={require('../../assets/bell.png')}
        />
      </View>
    </View>
  );
};

const WalletSelector = () => {
  return (
    <View style={styles.walletSelectorOuterContainer}>
      <Image
        style={styles.martian_logo}
        source={require('../../assets/martian_logo_black_small.png')}
      />
      <View style={styles.walletSelectorInnerContainer}>
        <View style={styles.walletSelectorTitleContainer}>
          <Text style={styles.walletTitle}>Martian.apt</Text>
          <Image
            style={styles.walletDropdown}
            source={require('../../assets/down_arrow.png')}
          />
        </View>
        <View style={styles.walletSelectorAddressContainer}>
          <Text style={styles.walletAddress}>0x6e....2ED0E</Text>
          <Image
            style={styles.addressCopy}
            source={require('../../assets/copy.png')}
          />
        </View>
      </View>
    </View>
  );
};

const PortFolioValue = () => {
  return (
    <Text style={styles.portfolioValue}>
      $23,450<Text style={styles.portfolioValueDecimal}>.23</Text>
    </Text>
  );
};

const BuySendButtons = () => {
  return (
    <View style={styles.buySendButtonContainer}>
      <Pressable style={styles.buyButton}>
        <Text style={styles.buyButtonText}>BUY</Text>
      </Pressable>
      <Pressable style={styles.SendButton}>
        <Text style={styles.SendButtonText}>SEND</Text>
      </Pressable>
    </View>
  );
};

const PortFolio = () => {
  const data: PortFolioItem[] = [
    {
      imgSrc: require('../../assets/aptos_logo_small.png'),
      name: 'Aptos',
      symbol: 'APT',
      count: 5268,
      value: 8242.12,
    },
    {
      imgSrc: require('../../assets/tether.png'),
      name: 'Tether',
      symbol: 'USDT',
      count: 5268,
      value: 8242.12,
    },
    {
      imgSrc: require('../../assets/usdc_coin.png'),
      name: 'USD Coin',
      symbol: 'USDC',
      count: 5268,
      value: 8242.12,
    },
  ];

  return (
    <View style={styles.portFolioItemsContainer}>
      {data.map(item => {
        return (
          <View style={styles.portFolioItemContainer}>
            <Image style={styles.portFolioItemImage} source={item.imgSrc} />
            <View style={styles.portFolioItemnameSymbolContainer}>
              <Text style={styles.portFolioItemNameText}>{item.name}</Text>
              <Text style={styles.portFolioItemSymbolText}>{item.symbol}</Text>
            </View>
            <View style={styles.portFolioItemCountValueContainer}>
              <Text style={styles.portFolioItemCountText}>
                {item.count} {item.symbol}
              </Text>
              <Text style={styles.portFolioItemValueText}>~${item.value}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const BottomNavigation = () => {
  const iconsName = [
    require('../../assets/wallet.png'),
    require('../../assets/explore.png'),
    require('../../assets/exchange.png'),
    require('../../assets/telescope.png'),
    require('../../assets/setting.png'),
  ];
  return (
    <View style={styles.bottomNavContainer}>
      {iconsName.map(src => {
        return <Image style={styles.bottomNavIcon} source={src} />;
      })}
    </View>
  );
};
