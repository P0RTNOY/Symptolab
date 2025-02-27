// screens/Login/Login1.js
import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator
} from "react-native";
import { Image } from "expo-image";
import styles from './Login1.styles';
import { useAuth } from '../../context/AuthContext';

const Login1 = ({ navigation }) => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    // Basic validation
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }
    
    if (!password.trim()) {
      Alert.alert("Error", "Please enter your password");
      return;
    }
    
    // Attempt login
    const success = await login(email, password);
    
    if (success) {
      // Navigation is handled automatically in App.js based on auth state
      console.log("Login successful");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          contentFit="cover"
          source={require("../../assets/symptolab--3.png")}
        />

        <Text style={styles.title}>Login</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!loading}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            editable={!loading}
          />
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
            disabled={loading}
          >
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../../assets/eye.png")}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Let me in</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Register')}
          disabled={loading}
        >
          <Text style={styles.registerText}>Is this your first time?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login1;