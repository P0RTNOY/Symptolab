import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Color.colorAliceblue,
    paddingTop: Platform.OS === 'android' ? 40 : 20,
    paddingBottom: 16,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'relative',
  },
  tabText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    opacity: 0.7,
  },
  tabTextActive: {
    color: Color.colorCadetblue,
    opacity: 1,
  },
  tabUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    height: 2,
    backgroundColor: Color.colorCadetblue,
  },
  reportContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
  },
  reportButton: {
    flex: 1,
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_13xl,
    borderWidth: 2,
    borderColor: Color.colorLightblue,
  },
  reportContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    height: 48,
  },
  reportText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorCadetblue,
  },
  chevronIcon: {
    width: 24,
    height: 24,
    transform: [{ rotate: '-90deg' }],
  },
  illustrationContainer: {
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  illustration: {
    width: width * 0.6,
    height: width * 0.25,
    maxWidth: 250,
    resizeMode: 'contain',
  },
  quoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_26xl,
    padding: 16,
    marginTop: 24,
    marginBottom: 32,
    borderWidth: 2,
    borderColor: Color.colorLightblue,
  },
  quoteText: {
    flex: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginRight: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Color.colorAliceblue,
    paddingVertical: 8,
    paddingBottom: Platform.OS === 'ios' ? 24 : 8,
    borderTopWidth: 1,
    borderTopColor: Color.colorLightblue,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    opacity: 0.8,
  },
  navTextActive: {
    color: Color.colorCadetblue,
    opacity: 1,
  },
});