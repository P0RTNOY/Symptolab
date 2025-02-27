import React, { useState, useRef, useEffect } from "react";
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
import styles from './VerifyPassword.styles';

const SIDEBAR_WIDTH = Dimensions.get('window').width * 0.85;
const CODE_LENGTH = 6;
const TIMER_DURATION = 180; // 3 minutes in seconds

const VerifyPassword = ({ navigation, route }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [code, setCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
  const email = route?.params?.email || 'Dana@dyadigital.com';
  const inputRefs = useRef([]);

  useEffect(() => {
    // Slide in animation
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
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

  const handleVerifyCode = () => {
    if (code.length !== CODE_LENGTH) {
      Alert.alert("Error", "Please enter the complete verification code");
      return;
    }
    navigation.navigate('ChangePassword');
  };

  const handleResendCode = () => {
    if (timeLeft > 0) return;
    setTimeLeft(TIMER_DURATION);
    Alert.alert("Success", "A new code has been sent to your email");
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
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

          <View style={styles.content}>
            <Text style={styles.description}>
              A 6-digit code has been sent to
            </Text>
            <Text style={styles.email}>{email}</Text>

            <View style={styles.codeContainer}>
              {Array(CODE_LENGTH).fill(0).map((_, index) => (
                <View key={index} style={styles.inputWrapper}>
                  <TextInput
                    ref={ref => inputRefs.current[index] = ref}
                    style={styles.codeInput}
                    maxLength={1}
                    keyboardType="number-pad"
                    onChangeText={(value) => {
                      const newCode = code.split('');
                      newCode[index] = value;
                      setCode(newCode.join(''));
                      
                      if (value && index < CODE_LENGTH - 1) {
                        inputRefs.current[index + 1]?.focus();
                      } else if (!value && index > 0) {
                        inputRefs.current[index - 1]?.focus();
                      }
                    }}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
                        inputRefs.current[index - 1]?.focus();
                      }
                    }}
                    value={code[index] || ''}
                  />
                </View>
              ))}
            </View>

            <Text style={styles.timer}>
              Code expires in: {formatTime(timeLeft)}
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.verifyButton}
                onPress={handleVerifyCode}
              >
                <Text style={styles.buttonText}>Verify code</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.resendButton}
                onPress={handleResendCode}
                disabled={timeLeft > 0}
              >
                <Text style={[
                  styles.resendText,
                  timeLeft > 0 && styles.resendTextDisabled
                ]}>
                  Resend code
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default VerifyPassword;