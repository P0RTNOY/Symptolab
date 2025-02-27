import { StyleSheet, Platform } from 'react-native';
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  header: {
    backgroundColor: Color.colorAliceblue,
    borderBottomLeftRadius: Border.br_26xl,
    borderBottomRightRadius: Border.br_26xl,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 40 : 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    fontWeight: "500",
  },
  userCode: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    opacity: 0.7,
  },
  editButton: {
    fontSize: FontSize.size_xs,
    color: Color.colorCadetblue,
    fontFamily: FontFamily.fbSpoilerPasEng,
  },
  quoteCard: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_13xl,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  quote: {
    flex: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.gloryRegular,
    color: Color.colorDarkslategray,
  },
  sunIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  menuContainer: {
    flex: 1,
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorAliceblue,
  },
  menuText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
  },
  chevronIcon: {
    width: 20,
    height: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Color.colorAliceblue,
    paddingVertical: 8,
    paddingBottom: Platform.OS === 'ios' ? 24 : 8,
  },
  navButton: {
    alignItems: 'center',
    padding: 8,
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
  },
  navLabelActive: {
    color: Color.colorCadetblue,
  }
});