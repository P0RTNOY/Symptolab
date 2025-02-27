import React, { useState, useRef, useEffect } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Animated,
  Dimensions,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import { Image } from "expo-image";
import styles from './Register1.styles';

const SIDEBAR_WIDTH = Dimensions.get('window').width * 0.85;
const CODE_LENGTH = 6;
const TIMER_DURATION = 180; // 3 minutes in seconds

const Register1 = ({ navigation, route }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [code, setCode] = useState(Array(CODE_LENGTH).fill(''));
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);
  const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
  const email = route?.params?.email || 'Dana@dyadigital.com';

  useEffect(() => {
    animateIn();
    startTimer();
  }, []);

  const animateIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const fullCode = code.join('');
    if (fullCode.length !== CODE_LENGTH) {
      Alert.alert('Error', 'Please enter the complete verification code');
      return;
    }
    navigation.navigate('Register2');
  };

  const handleResend = () => {
    if (!isResendDisabled) {
      setTimeLeft(TIMER_DURATION);
      setIsResendDisabled(true);
      setCode(Array(CODE_LENGTH).fill(''));
      startTimer();
      Alert.alert('Success', 'New verification code sent');
    }
  };

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
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
          >
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
              <Text style={styles.headerText}>Verify Your Email</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.subtitle}>A 6-digit code has been sent to</Text>
              <Text style={styles.email}>{email}</Text>

              <View style={styles.codeInputContainer}>
                {Array(CODE_LENGTH).fill(0).map((_, index) => (
                  <View key={index} style={styles.codeInputBox}>
                    <TextInput
                      ref={ref => inputRefs.current[index] = ref}
                      style={styles.codeInput}
                      keyboardType="numeric"
                      maxLength={1}
                      value={code[index]}
                      onChangeText={(text) => handleCodeChange(text, index)}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                    />
                  </View>
                ))}
              </View>

              <Text style={styles.timer}>
                Code expires in: {formatTime(timeLeft)}
              </Text>

              <View style={styles.actionButtonsContainer}>
                <TouchableOpacity onPress={closeSidebar}>
                  <Text style={styles.actionButtonText}>Change Email</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={handleResend}
                  disabled={isResendDisabled}
                >
                  <Text style={[
                    styles.actionButtonText,
                    isResendDisabled && styles.disabledText
                  ]}>
                    Resend Code
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                style={styles.verifyButton}
                onPress={handleVerify}
              >
                <Text style={styles.verifyButtonText}>Verify Code</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Register1;