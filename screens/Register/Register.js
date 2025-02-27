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
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { Image } from "expo-image";
import styles from './Register.styles';

const Register = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(formData.password)) {
      newErrors.password = 'Password must meet requirements';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      navigation.navigate("createAccount", { formData });
    } else {
      Alert.alert('Validation Error', 'Please check your input and try again');
    }
  };

  const renderInput = (field, placeholder, value, keyboardType = 'default', isPassword = false) => (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setFormData(prev => ({ ...prev, [field]: text }))}
        keyboardType={keyboardType}
        secureTextEntry={isPassword && !showPassword}
        autoCapitalize={field === 'email' ? 'none' : 'words'}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => field === 'password' ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword)}
        >
          <Image
            style={styles.eyeIcon}
            contentFit="cover"
            source={require("../../assets/eye.png")}
          />
        </TouchableOpacity>
      )}
      {errors[field] && <Text style={styles.errorText}>{errors[field]}</Text>}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Image
              style={styles.logo}
              contentFit="cover"
              source={require("../../assets/symptolab--3.png")}
            />
            
            <Text style={styles.createAnAccount}>Create an account</Text>

            {renderInput('firstName', 'First name', formData.firstName)}
            {renderInput('lastName', 'Last name', formData.lastName)}
            {renderInput('email', 'Email address', formData.email, 'email-address')}
            {renderInput('password', 'Password', formData.password, 'default', true)}
            {renderInput('confirmPassword', 'Confirm new password', formData.confirmPassword, 'default', true)}

            <Text style={styles.passwordHint}>
              The password must contain 6 characters, at least one special character, and a number.
            </Text>

            <TouchableOpacity 
              style={styles.registerButton}
              onPress={handleRegister}
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <Text style={styles.agreementText}>
              I agree to Symptolab's Terms & Conditions and acknowledge the Privacy Policy.
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login1')}>
              <Text style={styles.alreadyHaveAn}>Already have an account? Sign in</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;