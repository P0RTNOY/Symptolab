import { StyleSheet, Dimensions } from 'react-native';
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";

const SIDEBAR_WIDTH = Dimensions.get('window').width * 0.85;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: Color.colorGray_100,
    borderTopLeftRadius: Border.br_26xl,
    borderBottomLeftRadius: Border.br_26xl,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginRight: 32,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  description: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
    marginBottom: 8,
  },
  email: {
    fontSize: FontSize.size_lg,
    color: Color.colorCadetblue,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "500",
    marginBottom: 32,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },
  inputWrapper: {
    width: 40,
    height: 40,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorAliceblue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
  },
  timer: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  verifyButton: {
    backgroundColor: Color.colorCadetblue,
    borderRadius: Border.br_13xl,
    padding: 12,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  resendButton: {
    padding: 12,
    alignItems: 'center',
  },
  resendText: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  resendTextDisabled: {
    opacity: 0.5,
  },
});

export default styles;