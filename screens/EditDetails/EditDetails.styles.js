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
    padding: 16,
    borderTopLeftRadius: Border.br_26xl,
    borderBottomLeftRadius: Border.br_26xl,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    paddingTop: 16,
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
    marginRight: 32, // To offset the back button width
  },
  formContainer: {
    gap: 24,
  },
  fieldContainer: {
    gap: 8,
  },
  label: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray,
    opacity: 0.7,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: Color.colorLightblue,
    borderRadius: Border.br_13xl,
    padding: 12,
    height: 48,
  },
  value: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  editIcon: {
    width: 12,
    height: 12,
  },
  chevronIcon: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    marginTop: 32,
    gap: 16,
  },
  saveButton: {
    backgroundColor: Color.colorCadetblue,
    borderRadius: Border.br_13xl,
    padding: 12,
    alignItems: 'center',
  },
  deleteButton: {
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  deleteButtonText: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    opacity: 0.8,
  },
});

export default styles;