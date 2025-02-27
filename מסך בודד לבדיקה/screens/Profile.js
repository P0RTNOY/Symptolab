import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.profileChild, styles.profileLayout]} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <Image
          style={[styles.vectorIcon10, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector10.png")}
        />
        <Text style={styles.text}>2:43</Text>
      </View>
      <View style={[styles.profileItem, styles.profileLayout]} />
      <View style={[styles.profileInner, styles.groupItemPosition]} />
      <View style={[styles.edit2, styles.edit2Position]} />
      <Image
        style={[styles.vectorIcon11, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Text style={[styles.danaYaakovArye, styles.e11Typo]}>
        Dana Yaakov Arye
      </Text>
      <Text style={[styles.e11, styles.e11Typo]}>E11</Text>
      <Text style={styles.userName}>User name</Text>
      <Text style={[styles.fullName, styles.fullNameTypo]}>Full name</Text>
      <Text style={[styles.editDetails, styles.fullNameTypo]}>
        Edit details
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.groupItemPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-52.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.hiSisEvery, styles.sunIconPosition]}>
          Hi sis! Every day is a new opportunity to shine
        </Text>
        <Image
          style={[styles.sunIcon, styles.sunIconPosition]}
          contentFit="cover"
          source={require("../assets/sun.png")}
        />
      </View>
      <Image
        style={[styles.ellipseIcon, styles.groupItemPosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-13.png")}
      />
      <View style={styles.groupParent}>
        <View style={[styles.insightParent, styles.parentLayout]}>
          <Text style={[styles.insight, styles.homeTypo]}>Insight</Text>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-06.png")}
          />
        </View>
        <View style={[styles.settingsParent, styles.parentLayout]}>
          <Text style={[styles.insight, styles.homeTypo]}>Settings</Text>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-05.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.homePosition]}>
          <Text style={[styles.home, styles.homePosition]}>Home</Text>
          <Image
            style={[styles.icon2, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-07.png")}
          />
        </View>
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-276.png")}
        />
      </View>
      <View style={styles.rectangleView} />
      <View style={[styles.profileChild1, styles.profileChildLayout]} />
      <View style={[styles.profileChild2, styles.profileChildLayout]} />
      <View style={[styles.profileChild3, styles.profileChildLayout]} />
      <Image
        style={[styles.chevronDownIcon, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevrondown.png")}
      />
      <Text style={[styles.termsAndConditions, styles.e11Typo]}>
        Terms and conditions
      </Text>
      <Image
        style={[styles.chevronDownIcon1, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevrondown.png")}
      />
      <Text style={[styles.confidentiality, styles.e11Typo]}>
        Confidentiality
      </Text>
      <Text
        style={[styles.changeTheOrder, styles.e11Typo]}
      >{`Change the order of groups & symptoms`}</Text>
      <Image
        style={[styles.chevronDownIcon2, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevrondown.png")}
      />
      <Image
        style={[styles.chevronDownIcon3, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevrondown.png")}
      />
      <Text
        style={[styles.submitASymptom, styles.e11Typo]}
      >{`Submit a symptom change request `}</Text>
      <View style={[styles.profileChild4, styles.profileChildLayout]} />
      <Image
        style={[styles.chevronDownIcon4, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevrondown.png")}
      />
      <Text style={[styles.contactSupport, styles.e11Typo]}>
        Contact support
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    width: 390,
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_13xl,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: "0.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItemPosition: {
    left: "50%",
    position: "absolute",
  },
  edit2Position: {
    left: 298,
    overflow: "hidden",
  },
  e11Typo: {
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "300",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    left: 32,
    textAlign: "center",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  fullNameTypo: {
    top: 76,
    opacity: 0.7,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  groupChildPosition: {
    height: 29,
    width: 358,
    marginLeft: -179,
    left: "50%",
    position: "absolute",
  },
  sunIconPosition: {
    top: 6,
    position: "absolute",
  },
  parentLayout: {
    height: 44,
    top: 0,
  },
  homeTypo: {
    top: 30,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorDarkslategray,
  },
  iconPosition: {
    height: 26,
    top: 0,
    position: "absolute",
  },
  homePosition: {
    width: 31,
    left: 0,
    position: "absolute",
  },
  profileChildLayout: {
    left: 15,
    height: 28,
    borderWidth: 2,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    width: 358,
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  chevronIconLayout: {
    height: 24,
    width: 24,
    left: 334,
    position: "absolute",
    overflow: "hidden",
  },
  profileChild: {
    top: -18,
    height: 255,
  },
  vectorIcon: {
    width: "5.63%",
    right: "93.13%",
    left: "1.25%",
    bottom: "15.38%",
    top: "38.46%",
    height: "46.15%",
  },
  vectorIcon1: {
    top: "57.69%",
    right: "99.38%",
    bottom: "34.62%",
    left: "0%",
    height: "7.69%",
  },
  vectorIcon2: {
    height: "30.77%",
    width: "3.13%",
    top: "46.15%",
    right: "93.75%",
    bottom: "23.08%",
    left: "3.13%",
  },
  vectorIcon3: {
    width: "3.47%",
    top: "53.85%",
    right: "85.28%",
    bottom: "38.46%",
    left: "11.25%",
    height: "7.69%",
  },
  vectorIcon4: {
    height: "12.31%",
    width: "5.25%",
    right: "84.41%",
    bottom: "49.23%",
    left: "10.34%",
    top: "38.46%",
  },
  vectorIcon5: {
    height: "3.46%",
    width: "1.72%",
    top: "68.85%",
    right: "86.16%",
    bottom: "27.69%",
    left: "12.12%",
  },
  vectorIcon6: {
    top: "84.23%",
    bottom: "8.08%",
    left: "12.97%",
    height: "7.69%",
  },
  vectorIcon7: {
    height: "23.08%",
    top: "61.54%",
    right: "77.81%",
    left: "21.56%",
    bottom: "15.38%",
  },
  vectorIcon8: {
    height: "34.62%",
    top: "50%",
    right: "79.06%",
    left: "20.31%",
    bottom: "15.38%",
  },
  vectorIcon9: {
    right: "80.31%",
    left: "19.06%",
    bottom: "15.38%",
    top: "38.46%",
    height: "46.15%",
  },
  vectorIcon10: {
    height: "11.54%",
    top: "73.08%",
    right: "76.56%",
    left: "22.81%",
    bottom: "15.38%",
  },
  text: {
    left: 281,
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.simona,
    textAlign: "center",
    color: Color.colorDarkslategray,
    top: 0,
    position: "absolute",
  },
  vectorParent: {
    height: "3.08%",
    width: "82.05%",
    top: "0.71%",
    right: "8.97%",
    bottom: "96.21%",
    left: "8.97%",
    position: "absolute",
  },
  profileItem: {
    top: 741,
    height: 122,
  },
  profileInner: {
    marginLeft: -69,
    top: 832,
    borderRadius: 20,
    backgroundColor: "#49b2c5",
    width: 140,
    height: 5,
  },
  edit2: {
    top: 59,
    width: 9,
    height: 9,
    position: "absolute",
  },
  vectorIcon11: {
    height: "0.88%",
    width: "1.9%",
    top: "9.36%",
    right: "24%",
    bottom: "89.76%",
    left: "74.1%",
  },
  danaYaakovArye: {
    top: 89,
  },
  e11: {
    top: 130,
  },
  userName: {
    top: 116,
    opacity: 0.7,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "300",
    left: 32,
    textAlign: "center",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  fullName: {
    left: 32,
    top: 76,
  },
  editDetails: {
    left: 300,
  },
  ellipseIcon: {
    marginLeft: -74,
    top: 133,
    width: 148,
    height: 148,
  },
  groupChild: {
    top: 0,
    width: 358,
    marginLeft: -179,
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_13xl,
  },
  hiSisEvery: {
    left: 41,
    letterSpacing: -0.1,
    fontFamily: FontFamily.gloryRegular,
    width: 241,
    height: 18,
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    top: 6,
    textAlign: "center",
    color: Color.colorDarkslategray,
  },
  sunIcon: {
    width: 18,
    height: 19,
    left: 298,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 297,
  },
  groupIcon: {
    top: 261,
    left: 227,
    width: 17,
    height: 17,
    position: "absolute",
  },
  insight: {
    width: 42,
    position: "absolute",
    left: 0,
    top: 30,
  },
  icon: {
    left: 8,
    width: 27,
  },
  insightParent: {
    left: 103,
    width: 42,
    position: "absolute",
  },
  settingsParent: {
    left: 217,
    width: 42,
    position: "absolute",
  },
  home: {
    top: 30,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fbSpoilerPasEng,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorDarkslategray,
  },
  icon2: {
    left: 3,
    width: 26,
  },
  homeParent: {
    height: 44,
    top: 0,
  },
  groupItem: {
    marginLeft: 100.5,
    top: 46,
    borderRadius: 36,
    width: 16,
    height: 1,
  },
  groupParent: {
    top: 755,
    left: 65,
    width: 259,
    height: 47,
    position: "absolute",
  },
  rectangleView: {
    top: 342,
    left: 16,
    height: 28,
    borderWidth: 2,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    width: 358,
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  profileChild1: {
    top: 386,
  },
  profileChild2: {
    top: 474,
  },
  profileChild3: {
    top: 430,
  },
  chevronDownIcon: {
    top: 344,
  },
  termsAndConditions: {
    top: 347,
  },
  chevronDownIcon1: {
    top: 388,
  },
  confidentiality: {
    top: 391,
  },
  changeTheOrder: {
    top: 435,
  },
  chevronDownIcon2: {
    top: 432,
  },
  chevronDownIcon3: {
    top: 476,
  },
  submitASymptom: {
    top: 479,
  },
  profileChild4: {
    top: 519,
  },
  chevronDownIcon4: {
    top: 521,
  },
  contactSupport: {
    top: 524,
  },
  profile: {
    borderRadius: 45,
    backgroundColor: "#fdfcf8",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Profile;
