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
import styles from './ResetPassword.styles';

const SIDEBAR_WIDTH = Dimensions.get('window').width * 0.85;

const ResetPassword = ({ navigation }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const slideAnim = React.useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
  const [email, setEmail] = React.useState('');

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

  const handleGetCode = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    // Here you would typically make an API call to send the reset code
    navigation.navigate('VerifyPassword', { email });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
            <Text style={styles.title}>Reset password</Text>
          </View>

          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.description}>
              Please enter your email and we'll send you a 4-digit code
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email address</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.getCodeButton}
                onPress={handleGetCode}
              >
                <Text style={styles.buttonText}>Get digit code</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.goBackButton}
                onPress={closeSidebar}
              >
                <Text style={styles.goBackText}>Go back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ResetPassword;