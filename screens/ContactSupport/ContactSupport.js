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
import styles from './ContactSupport.styles';

const SIDEBAR_WIDTH = Dimensions.get('window').width * 0.85;

const ContactSupport = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;

  useEffect(() => {
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

  const handleSubmit = () => {
    if (!subject.trim()) {
      Alert.alert("Error", "Please select a subject");
      return;
    }
    if (!details.trim()) {
      Alert.alert("Error", "Please provide details about the issue");
      return;
    }

    Alert.alert(
      "Submit Support Request",
      "Are you sure you want to submit this support request?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Submit",
          onPress: () => {
            // Here you would typically send the support request
            Alert.alert("Success", "Your support request has been submitted");
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
            <Text style={styles.title}>Contact support</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Select subject</Text>
              <TouchableOpacity 
                style={styles.selectButton}
                onPress={() => {
                  // Here you would typically show a subject picker
                  setSubject('Technical Issue');
                }}
              >
                <Text style={styles.selectButtonText}>
                  {subject || 'Select a subject'}
                </Text>
                <Image
                  style={styles.chevronIcon}
                  contentFit="cover"
                  source={require("../../assets/chevrondown1.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Provide details about the issue</Text>
              <TextInput
                style={styles.detailsInput}
                multiline
                numberOfLines={4}
                value={details}
                onChangeText={setDetails}
                placeholder="Enter your message here"
                textAlignVertical="top"
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Submit</Text>
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

export default ContactSupport;