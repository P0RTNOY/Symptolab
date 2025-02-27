import { StyleSheet } from 'react-native';
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  title: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginBottom: 32,
  },
  termsContainer: {
    width: '100%',
    marginBottom: 32,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: Color.colorCadetblue,
    borderRadius: 4,
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: Color.colorCadetblue,
  },
  termsText: {
    flex: 1,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  createButton: {
    backgroundColor: Color.colorCadetblue,
    borderRadius: Border.br_13xl,
    padding: 16,
    alignItems: 'center',
  },
  createButtonDisabled: {
    opacity: 0.5,
  },
  createButtonText: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: '500',
  },
  loginButton: {
    padding: 12,
    alignItems: 'center',
  },
  loginText: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
    textDecorationLine: 'underline',
  },
});