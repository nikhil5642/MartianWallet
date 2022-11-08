import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },

  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  logo: {},
  logoText: {marginTop: 20},

  contentContainer: {flex: 1, marginHorizontal: 24},
  passwordInput: {
    backgroundColor: '#ffffff',
    borderColor: '#E9E8E4',
    borderWidth: 2,
    shadowOffset: {width: 0, height: 2},
    elevation: 4,
    shadowOpacity: 0.1,

    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    textAlign: 'center',

    fontSize: 16,
  },
  unlockButton: {
    marginTop: 12,
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#000000',
    borderRadius: 8,
  },
  unlockButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#818181',
    fontWeight: '500',
    alignSelf: 'center',
  },
});
