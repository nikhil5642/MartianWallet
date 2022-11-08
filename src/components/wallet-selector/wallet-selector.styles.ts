import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
  },

  headerContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  buttonClose: {
    resizeMode: 'contain',
    height: 16,
    width: 16,
    marginRight: 4,
  },

  itemContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  itemImage: {
    resizeMode: 'contain',
    height: 24,
    width: 24,
  },
  itemName: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    flex: 1,
  },
  itemAddress: {
    fontSize: 15,
    fontWeight: '500',
    color: '#838078',
  },
  itemRadioButton: {
    resizeMode: 'contain',
    height: 24,
    width: 24,
  },
  bottomOptionsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  bottomItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#FAFAFA',
    borderWidth: 1,
    paddingTop: 16,
    paddingBottom: 20,
  },
  bottomItemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  bottomItemImage: {
    resizeMode: 'contain',
    height: 16,
    width: 16,
    marginRight: 4,
  },
});
