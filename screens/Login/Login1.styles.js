// screens/Login/Login1.styles.js
import { StyleSheet } from 'react-native';
import { Border, FontSize, Color, FontFamily } from "../../GlobalStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  title: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginBottom: 32,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.colorLightblue,
    borderRadius: Border.br_13xl,
    height: 48,
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: Color.colorWhite,
  },
  input: {
    flex: 1,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  eyeButton: {
    padding: 8,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  passwordNote: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
    opacity: 0.7,
    marginBottom: 16,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: Color.colorCadetblue,
    borderRadius: Border.br_13xl,
    height: 48,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  loginButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  registerText: {
    marginTop: 16,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
  }
});