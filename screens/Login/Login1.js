import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  SafeAreaView,
  Alert
} from "react-native";
import { Image } from "expo-image";
import styles from './Login1.styles';

// Temporary test credentials
const TEST_EMAIL = "1234@prendo.com";
const TEST_PASSWORD = "1234";

const Login1 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email === TEST_EMAIL && password === TEST_PASSWORD) {
      navigation.navigate('Profile');
    } else {
      Alert.alert(
        "Test Credentials", 
        `Please use:\nEmail: ${TEST_EMAIL}\nPassword: ${TEST_PASSWORD}`
      );
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
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
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
        >
          <Text style={styles.loginButtonText}>Let me in</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>Is this your first time?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login1;