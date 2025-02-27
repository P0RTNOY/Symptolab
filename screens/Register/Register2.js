import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from "react-native";
import { Image } from "expo-image";
import styles from './Register2.styles';

const Register2 = ({ navigation }) => {
  const [agreement, setAgreement] = useState(false);

  const handleCreateAccount = () => {
    if (!agreement) {
      Alert.alert("Error", "Please accept the terms and conditions to continue");
      return;
    }
    
    // Here you would typically finalize the registration
    navigation.navigate("Home"); // Or wherever you want to go after successful registration
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Image
            style={styles.logo}
            contentFit="cover"
            source={require("../../assets/symptolab--3.png")}
          />

          <Text style={styles.title}>Create an account</Text>

          {/* Terms & Conditions Section */}
          <View style={styles.termsContainer}>
            <TouchableOpacity 
              style={styles.checkboxContainer}
              onPress={() => setAgreement(!agreement)}
            >
              <View style={[
                styles.checkbox,
                agreement && styles.checkboxChecked
              ]} />
              <Text style={styles.termsText}>
                I agree to Symptolab's Terms & Conditions and acknowledge the Privacy Policy.
              </Text>
            </TouchableOpacity>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[
                styles.createButton,
                !agreement && styles.createButtonDisabled
              ]}
              onPress={handleCreateAccount}
              disabled={!agreement}
            >
              <Text style={styles.createButtonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.loginButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.loginText}>Already have an account? Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register2;