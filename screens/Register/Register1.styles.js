import { StyleSheet, Dimensions } from 'react-native';
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";

const SIDEBAR_WIDTH = Dimensions.get('window').width * 0.85;

export default StyleSheet.create({
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
  container: {
    flex: 1,
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
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginRight: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginBottom: 8,
  },
  email: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorCadetblue,
    marginBottom: 32,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  codeInputBox: {
    width: 40,
    height: 40,
    borderRadius: Border.br_13xl,
    borderWidth: 2,
    borderColor: Color.colorLightblue,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.colorWhite,
  },
  codeInput: {
    fontSize: FontSize.size_lg,
    textAlign: 'center',
    color: Color.colorDarkslategray,
    width: '100%',
    height: '100%',
  },
  timer: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    marginBottom: 24,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 32,
  },
  actionButtonText: {
    fontSize: FontSize.size_sm,
    color: Color.colorCadetblue,
    textDecorationLine: 'underline',
  },
  disabledText: {
    opacity: 0.5,
  },
  verifyButton: {
    backgroundColor: Color.colorCadetblue,
    borderRadius: Border.br_13xl,
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
  },
  verifyButtonText: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
});