import { StyleSheet, Dimensions } from 'react-native';
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoSection: {
    width: '100%',
    alignItems: 'center',
    marginTop: height * 0.08,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    maxWidth: 164,
    maxHeight: 164,
  },
  welcomeSection: {
    alignItems: 'center',
    marginTop: height * 0.05,
    marginBottom: height * 0.03,
  },
  title: {
    fontSize: FontSize.size_lg,
    lineHeight: 21,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "300",
    marginBottom: 10,
  },
  decorativeLine: {
    width: 32,
    height: 1,
    backgroundColor: Color.colorDarkslategray,
    marginTop: 10,
  },
  buttonSection: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 16,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: Color.colorCadetblue,
    borderRadius: Border.br_13xl,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.colorCadetblue,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: Color.colorLightblue,
  },
  buttonText: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "300",
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  bottomImage: {
    width: width * 0.6,
    height: height * 0.25,
    maxWidth: 250,
  },
});

export default styles;