// screens/Password/ChangePassword.js
import * as React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Animated, 
  Dimensions, 
  Modal,
  TextInput,
  Alert 
} from "react-native";
import { Image } from "expo-image";
import styles from './ChangePassword.styles';

const SIDEBAR_WIDTH = Dimensions.get('window').width * 0.85;

const ChangePassword = ({ navigation }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const slideAnim = React.useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
  const [passwordData, setPasswordData] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const closeSidebar = () => {
    Animated.timing(slideAnim, {
      toValue: SIDEBAR_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false);
      navigation.goBack();
    });
  };

  const handleSavePassword = () => {
    // Validate passwords
    if (!passwordData.currentPassword) {
      Alert.alert("Error", "Please enter your current password");
      return;
    }
    
    if (!passwordData.newPassword) {
      Alert.alert("Error", "Please enter a new password");
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      Alert.alert("Error", "Passwords don't match");
      return;
    }

    Alert.alert(
      "Save Changes",
      "Are you sure you want to change your password?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Save",
          onPress: () => {
            // Here you would make an API call to update password
            Alert.alert("Success", "Password changed successfully!");
            closeSidebar();
          }
        }
      ]
    );
  };

  if (!isVisible) return null;

  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="none"
      onRequestClose={closeSidebar}
    >
      <View style={styles.overlay}>
        <Animated.View 
          style={[
            styles.sidebar,
            {
              transform: [{ translateX: slideAnim }]
            }
          ]}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity 
              onPress={closeSidebar}
              style={styles.backButton}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../../assets/chevrondown.png")}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Change password</Text>
          </View>

          {/* Password Form */}
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Current password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={passwordData.currentPassword}
                onChangeText={(text) => setPasswordData(prev => ({
                  ...prev,
                  currentPassword: text
                }))}
                placeholder="Enter current password"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>New password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={passwordData.newPassword}
                onChangeText={(text) => setPasswordData(prev => ({
                  ...prev,
                  newPassword: text
                }))}
                placeholder="Enter new password"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm new password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={passwordData.confirmPassword}
                onChangeText={(text) => setPasswordData(prev => ({
                  ...prev,
                  confirmPassword: text
                }))}
                placeholder="Confirm new password"
              />
            </View>

            <Text style={styles.passwordRequirements}>
              You can use simple passwords like "1234"
            </Text>
          </View>

          {/* Actions */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={handleSavePassword}
            >
              <Text style={styles.buttonText}>Save new password</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.resetButton}
              onPress={() => navigation.navigate('ResetPassword')}
            >
              <Text style={styles.resetText}>Reset password</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ChangePassword;