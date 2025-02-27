import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 20,
    backgroundColor: Color.colorAliceblue,
  },
  welcomeContainer: {
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginBottom: 4,
  },
  subText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    opacity: 0.8,
    marginBottom: 8,
  },
  motivationalText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
  },
  dayCounter: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_26xl,
    padding: 16,
    alignSelf: 'flex-end',
  },
  dayCounterText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
  },
  calendarContainer: {
    backgroundColor: Color.colorAliceblue,
    padding: 16,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  dayColumn: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginBottom: 8,
  },
  dateCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  currentDate: {
    backgroundColor: Color.colorCadetblue,
  },
  selectedDate: {
    backgroundColor: Color.colorCadetblue,
  },
  selectedDateText: {
    color: Color.colorWhite,
  },
  highlightedDate: {
    backgroundColor: Color.colorIndianred,
  },
  dateText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
  },
  groupContainer: {
    marginVertical: 8,
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_13xl,
    overflow: 'hidden',
  },
  groupHeader: {
    padding: 16,
    backgroundColor: Color.colorCadetblue,
  },
  groupTitle: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
  },
  groupContent: {
    padding: 16,
  },
  painScaleContainer: {
    marginBottom: 16,
  },
  painScaleLabel: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginBottom: 4,
  },
  painScaleRange: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    opacity: 0.8,
    marginBottom: 8,
  },
  sliderContainer: {
    marginVertical: 8,
  },
  slider: {
    height: 4,
    backgroundColor: Color.colorLightblue,
    borderRadius: 2,
    marginVertical: 12,
  },
  sliderTrack: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: Color.colorLightblue,
    borderRadius: 2,
  },
  sliderThumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Color.colorCadetblue,
    top: -8,
    marginLeft: -10,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  sliderLabel: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray,
  },
  yesNoContainer: {
    marginBottom: 16,
  },
  yesNoLabel: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginBottom: 4,
  },
  yesNoSubtitle: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    opacity: 0.8,
    marginBottom: 8,
  },
  yesNoOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  optionButtonSelected: {
    borderBottomWidth: 2,
    borderBottomColor: Color.colorCadetblue,
  },
  optionText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
  },
  completionContainer: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_13xl,
    padding: 24,
    margin: 16,
    alignItems: 'center',
  },
  completionTitle: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    marginBottom: 8,
  },
  completionText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    textAlign: 'center',
    marginBottom: 4,
  },
  untilTomorrow: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.fbSpoilerPasEng,
    color: Color.colorDarkslategray,
    opacity: 0.8,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Color.colorAliceblue,
    paddingVertical: 12,
    paddingBottom: Platform.OS === 'ios' ? 32 : 12,
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