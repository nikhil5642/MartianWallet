import {PortFolioItem} from './home-screen.interface';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 16,
  },

  chainSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 100,
  },

  chainLogo: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
  },
  chainText: {
    fontWeight: '500',
    marginLeft: 8,
    fontSize: 14,
  },
  chainDropdown: {
    marginHorizontal: 8,
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },

  notificationBellContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  notificationBell: {
    resizeMode: 'contain',
    height: 36,
    width: 36,
  },

  contentContainer: {flex: 1},

  martian_logo: {
    resizeMode: 'contain',
    height: 60,
    width: 60,
  },

  walletSelectorOuterContainer: {
    flexDirection: 'row',
    marginLeft: 24,
    marginTop: 48,
    alignItems: 'center',
  },
  walletSelectorInnerContainer: {
    marginLeft: 12,
  },
  walletSelectorTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  walletDropdown: {
    marginHorizontal: 8,
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },
  walletSelectorAddressContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  walletAddress: {
    color: '#838078',
    fontSize: 12,
  },
  addressCopy: {
    marginHorizontal: 8,
    height: 12,
    width: 12,
    resizeMode: 'contain',
  },

  portfolioValue: {
    fontSize: 48,
    marginLeft: 24,
    marginTop: 16,
    color: '#000000',
  },

  portfolioValueDecimal: {
    fontSize: 48,
    marginLeft: 24,
    marginTop: 16,
    color: '#83807899',
  },

  buySendButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 56,
  },
  buyButton: {
    flex: 1,
    marginTop: 12,
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#000000',
    borderRadius: 8,
    marginRight: 4,
  },
  buyButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },

  SendButton: {
    flex: 1,
    marginTop: 12,
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginLeft: 4,
    borderWidth: 2,
    borderColor: '#000000',
  },
  SendButtonText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  portFolioItemsContainer: {
    marginTop: 28,
    marginHorizontal: 24,
  },
  portFolioItemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    elevation: 4,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  portFolioItemImage: {
    height: 36,
    width: 36,
    resizeMode: 'contain',
  },
  portFolioItemnameSymbolContainer: {
    marginLeft: 16,
    flex: 1,
  },
  portFolioItemNameText: {
    fontSize: 16,
    fontWeight: '500',
  },

  portFolioItemSymbolText: {
    fontSize: 16,
    color: '#818181',
  },

  portFolioItemCountValueContainer: {},

  portFolioItemCountText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'right',
  },

  portFolioItemValueText: {
    fontSize: 16,
    color: '#818181',
    textAlign: 'right',
  },

  bottomNavContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  bottomNavIcon: {
    flex: 1,
    height: 24,
    width: 24,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
