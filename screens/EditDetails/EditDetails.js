import * as React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Animated, 
  Dimensions, 
  Modal,
  Alert 
} from "react-native";
import { Image } from "expo-image";
import styles from './EditDetails.styles';

const SIDEBAR_WIDTH = Dimensions.get('window').width * 0.85;

const EditDetails = ({ navigation }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const slideAnim = React.useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
  const [personalInfo, setPersonalInfo] = React.useState({
    fullName: "Dana Yaakov Arye",
    birthday: "24 / 03 /1995"
  });

  React.useEffect(() => {
    // Animate sidebar entry
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

  const handleSaveChanges = () => {
    Alert.alert(
      "Save Changes",
      "Are you sure you want to save these changes?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Save",
          onPress: () => {
            // Simulate saving
            Alert.alert("Success", "Changes saved successfully!");
            closeSidebar();
          }
        }
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            // Here you would typically make an API call to delete the account
            navigation.reset({
              index: 0,
              routes: [{ name: 'Hello' }],
            });
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
            <Text style={styles.title}>Edit details</Text>
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Full name</Text>
              <TouchableOpacity 
                style={styles.inputField}
                onPress={() => {
                  Alert.alert("Edit Name", "Name editing functionality to be implemented");
                }}
              >
                <Text style={styles.value}>{personalInfo.fullName}</Text>
                <Image
                  style={styles.editIcon}
                  contentFit="cover"
                  source={require("../../assets/vector14.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Birthday</Text>
              <TouchableOpacity 
                style={styles.inputField}
                onPress={() => {
                  Alert.alert("Edit Birthday", "Birthday editing functionality to be implemented");
                }}
              >
                <Text style={styles.value}>{personalInfo.birthday}</Text>
                <Image
                  style={styles.editIcon}
                  contentFit="cover"
                  source={require("../../assets/vector14.png")}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={styles.fieldContainer}
              onPress={() => navigation.navigate('ChangePassword')}
            >
              <View style={styles.inputField}>
                <Text style={styles.value}>Change password</Text>
                <Image
                  style={styles.chevronIcon}
                  contentFit="cover"
                  source={require("../../assets/chevrondown.png")}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={handleSaveChanges}
            >
              <Text style={styles.buttonText}>Save my changes</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={handleDeleteAccount}
            >
              <Text style={styles.deleteButtonText}>Delete account</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default EditDetails;