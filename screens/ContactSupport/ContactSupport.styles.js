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
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
    marginBottom: 8,
  },
  selectButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.colorLightblue,
    borderRadius: Border.br_13xl,
    padding: 12,
    height: 48,
  },
  selectButtonText: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  chevronIcon: {
    width: 24,
    height: 24,
  },
  detailsInput: {
    borderWidth: 2,
    borderColor: Color.colorLightblue,
    borderRadius: Border.br_13xl,
    padding: 12,
    height: 120,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
  },
  buttonContainer: {
    gap: 16,
  },
  submitButton: {
    backgroundColor: Color.colorCadetblue,
    borderRadius: Border.br_13xl,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  goBackButton: {
    padding: 12,
    alignItems: 'center',
  },
  goBackText: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    opacity: 0.8,
  },
});

export default styles;