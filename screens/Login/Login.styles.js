import { StyleSheet } from 'react-native';
import { Border, FontSize, Color, FontFamily } from "../../GlobalStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  keyboardAvoid: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  header: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginBottom: 32,
  },
  form: {
    width: '100%',
    gap: 16,
  },
  inputGroup: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Color.colorLightblue,
    borderRadius: Border.br_13xl,
    paddingHorizontal: 16,
    backgroundColor: Color.colorWhite,
    height: 48,
  },
  inputError: {
    borderColor: Color.colorIndianred,
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
    tintColor: Color.colorDarkslategray,
  },
  errorText: {
    fontSize: FontSize.size_xs,
    color: Color.colorIndianred,
    fontFamily: FontFamily.fbSpoilerPasEng,
    marginTop: 4,
    marginLeft: 16,
  },
  actionButtons: {
    width: '100%',
    gap: 16,
    marginTop: 32,
  },
  loginButton: {
    backgroundColor: Color.colorCadetblue,
    borderRadius: Border.br_13xl,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
  loginButtonText: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "500",
  },
  resetButton: {
    alignItems: "center",
    padding: 8,
  },
  resetText: {
    fontSize: FontSize.size_sm,
    color: Color.colorCadetblue,
    fontFamily: FontFamily.fbSpoilerPasEng,
    textDecorationLine: "underline",
  }
});