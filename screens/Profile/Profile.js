import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform
} from "react-native";
import { Image } from "expo-image";
import styles from './Profile.styles';

const MenuItem = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Text style={styles.menuText}>{title}</Text>
    <Image
      style={styles.chevronIcon}
      contentFit="cover"
      source={require("../../assets/chevrondown.png")}
    />
  </TouchableOpacity>
);

const NavButton = ({ icon, label, onPress, isActive }) => (
  <TouchableOpacity style={styles.navButton} onPress={onPress}>
    <Image
      style={styles.navIcon}
      contentFit="cover"
      source={icon}
    />
    <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <TouchableOpacity onPress={() => navigation.navigate("EditDetails")}>
            <Image
              style={styles.profileImage}
              contentFit="cover"
              source={require("../../assets/mask-group.png")}
            />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Dana Yaakov Arye</Text>
            <Text style={styles.userCode}>E11</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("EditDetails")}>
            <Text style={styles.editButton}>Edit details</Text>
          </TouchableOpacity>
        </View>

        {/* Motivational Quote */}
        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            Hi sis! Every day is a new opportunity to shine
          </Text>
          <Image
            style={styles.sunIcon}
            contentFit="cover"
            source={require("../../assets/sun.png")}
          />
        </View>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.menuContainer}>
        <MenuItem 
          title="Terms and conditions" 
          onPress={() => navigation.navigate("Terms")}
        />
        <MenuItem 
          title="Confidentiality" 
          onPress={() => navigation.navigate("Confidentiality")}
        />
        <MenuItem 
          title="Change the order of groups & symptoms" 
          onPress={() => navigation.navigate("ChangeOrder")}
        />
        <MenuItem 
          title="Submit a symptom change request" 
          onPress={() => navigation.navigate("SubmitSymptom")}
        />
        <MenuItem 
          title="Contact support" 
          onPress={() => navigation.navigate("ContactSupport")}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavButton
          icon={require("../../assets/-07.png")}
          label="Home"
          onPress={() => navigation.navigate("Home")}
        />
        <NavButton
          icon={require("../../assets/-06.png")}
          label="Insight"
          onPress={() => navigation.navigate("Insight")}
        />
        <NavButton
          icon={require("../../assets/-05.png")}
          label="Settings"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;