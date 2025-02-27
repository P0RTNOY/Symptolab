// screens/Profile/Profile.js
import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  Alert,
  ActivityIndicator
} from "react-native";
import { Image } from "expo-image";
import styles from './Profile.styles';
import { useAuth } from '../../context/AuthContext';

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
  const { user, logout, loading } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: async () => {
            setLoggingOut(true);
            await logout();
            setLoggingOut(false);
            // Navigation to login screen is handled by the AuthContext
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loggingOut && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Logging out...</Text>
        </View>
      )}
      
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
            <Text style={styles.userName}>{user?.user_name || 'Dana Yaakov Arye'}</Text>
            <Text style={styles.userCode}>{user?.user_code || 'E11'}</Text>
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
        
        {/* Logout Menu Item */}
        <TouchableOpacity style={styles.logoutMenuItem} onPress={handleLogout} disabled={loggingOut}>
          <Text style={styles.logoutMenuText}>Logout</Text>
        </TouchableOpacity>
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
          label="Profile"
          onPress={() => {}}
          isActive={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;