import * as React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import styles from './Hello.styles';

const Hello = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <Image
            style={styles.logo}
            contentFit="cover"
            source={require("../../assets/symptolab--3.png")}
          />
        </View>

        {/* Welcome Text */}
        <View style={styles.welcomeSection}>
          <Text style={styles.title}>Hi there!</Text>
          <View style={styles.decorativeLine} />
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonSection}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Login1')}
          >
            <Text style={styles.buttonText}>I'm already a member</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.buttonText}>It׳s my first time</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.bottomImage}
            contentFit="cover"
            resizeMode="contain"
            source={require("../../assets/-3.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Hello;