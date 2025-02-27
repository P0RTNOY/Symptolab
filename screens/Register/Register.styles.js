import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Border, FontSize, Color, FontFamily } from "../../GlobalStyles";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    paddingBottom: 20,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    maxWidth: 164,
    maxHeight: 164,
    alignSelf: "center",
    marginBottom: 20,
  },
  createAnAccount: {
    fontSize: FontSize.size_lg,
    lineHeight: 21,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "300",
    marginBottom: 30,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Color.colorLightblue,
    borderRadius: Border.br_13xl,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Color.colorWhite,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 16,
    top: -32,
  },
  errorText: {
    color: 'red',
    fontSize: FontSize.size_xs,
    marginTop: 4,
    marginLeft: 16,
  },
  passwordHint: {
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    color: Color.colorDarkslategray,
    opacity: 0.7,
    marginBottom: 24,
    paddingHorizontal: 16,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  registerButton: {
    backgroundColor: Color.colorCadetblue,
    borderRadius: Border.br_13xl,
    alignItems: "center",
    paddingVertical: 14,
    marginBottom: 24,
  },
  registerButtonText: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "500",
  },
  agreementText: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: FontFamily.fbSpoilerPasEng,
    paddingHorizontal: 20,
  },
  alreadyHaveAn: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    textAlign: "center",
    textDecorationLine: "underline",
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
});

export default styles;