import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import styles from './Profile1.styles';

const Profile1 = ({ navigation }) => {
  const goToEditDetails = () => {
    navigation.navigate("EditDetails");
  };

  const goToSupport = () => {
    navigation.navigate("ContactSupport");
  };

  const goToInsight = () => {
    navigation.navigate("Insight");
  };

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.profile}>
      <View style={[styles.profileChild, styles.profileLayout]} />
      <View style={[styles.profileItem, styles.profileLayout]} />
      <View style={[styles.edit2, styles.edit2Position]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../../assets/vector11.png")}
      />
      <Text style={[styles.danaYaakovArye, styles.e11Typo]}>
        Dana Yaakov Arye
      </Text>
      <Text style={[styles.e11, styles.e11Typo]}>E11</Text>
      <Text style={styles.userName}>User name</Text>
      <Text style={[styles.fullName, styles.fullNameTypo]}>Full name</Text>
      <TouchableOpacity onPress={goToEditDetails}>
        <Text style={[styles.editDetails, styles.fullNameTypo]}>
          Edit details
        </Text>
      </TouchableOpacity>

      <Image
        style={[styles.profileInner, styles.groupItemPosition]}
        contentFit="cover"
        source={require("../../assets/ellipse-52.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.hiSisEvery, styles.sunIconPosition]}>
          Hi sis! Every day is a new opportunity to shine
        </Text>
        <Image
          style={[styles.sunIcon, styles.sunIconPosition]}
          contentFit="cover"
          source={require("../../assets/sun.png")}
        />
      </View>
      <Image
        style={[styles.profileInner, styles.groupItemPosition]}
        contentFit="cover"
        source={require("../../assets/mask-group.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../../assets/group-13.png")}
      />
      <TouchableOpacity onPress={goToInsight}>
        <View style={[styles.insightParent, styles.parentLayout]}>
          <Text style={[styles.insight, styles.homeTypo]}>Insight</Text>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../../assets/-06.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.groupParent}>
        <TouchableOpacity onPress={goToSettings}>
          <View style={[styles.settingsParent, styles.parentLayout]}>
            <Text style={[styles.insight, styles.homeTypo]}>Settings</Text>
            <Image
              style={[styles.icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../../assets/-05.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToHome}>
          <View style={[styles.homeParent, styles.homePosition]}>
            <Text style={[styles.home, styles.homePosition]}>Home</Text>
            <Image
              style={[styles.icon2, styles.iconPosition]}
              contentFit="cover"
              source={require("../../assets/-07.png")}
            />
          </View>
        </TouchableOpacity>

        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../../assets/rectangle-276.png")}
        />
      </View>
      <View style={styles.rectangleView} />
      <View style={[styles.profileChild1, styles.profileChildLayout]} />
      <View style={[styles.profileChild2, styles.profileChildLayout]} />
      <View style={[styles.profileChild3, styles.profileChildLayout]} />
      <Image
        style={[styles.chevronDownIcon, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../../assets/chevrondown.png")}
      />
      <Text style={[styles.termsAndConditions, styles.e11Typo]}>
        Terms and conditions
      </Text>
      <Image
        style={[styles.chevronDownIcon1, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../../assets/chevrondown.png")}
      />
      <Text style={[styles.confidentiality, styles.e11Typo]}>
        Confidentiality
      </Text>
      <Text style={[styles.changeTheOrder, styles.e11Typo]}>
        Change the order of groups & symptoms
      </Text>
      <Image
        style={[styles.chevronDownIcon2, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../../assets/chevrondown.png")}
      />
      <Image
        style={[styles.chevronDownIcon3, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../../assets/chevrondown.png")}
      />
      <Text style={[styles.submitASymptom, styles.e11Typo]}>
        Submit a symptom change request
      </Text>
      <View style={[styles.profileChild4, styles.profileChildLayout]} />
      <Image
        style={[styles.chevronDownIcon4, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../../assets/chevrondown.png")}
      />
      <TouchableOpacity onPress={goToSupport}>
        <Text style={[styles.contactSupport, styles.e11Typo]}>
          Contact support
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile1;