import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Image } from "expo-image";
import styles from './Insight.styles';

const TabButton = ({ title, isActive, onPress }) => (
  <TouchableOpacity 
    style={[styles.tabButton, isActive && styles.tabButtonActive]} 
    onPress={onPress}
  >
    <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
      {title}
    </Text>
    {isActive && <View style={styles.tabUnderline} />}
  </TouchableOpacity>
);

const ReportButton = ({ title, onPress }) => (
  <TouchableOpacity 
    style={styles.reportButton}
    onPress={onPress}
  >
    <View style={styles.reportContent}>
      <Text style={styles.reportText}>{title}</Text>
      <Image
        style={styles.chevronIcon}
        contentFit="cover"
        source={require("../../assets/chevrondown.png")}
      />
    </View>
  </TouchableOpacity>
);

const Insight = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Patterns');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <TabButton
          title="Patterns"
          isActive={activeTab === 'Patterns'}
          onPress={() => setActiveTab('Patterns')}
        />
        <TabButton
          title="Correlations"
          isActive={activeTab === 'Correlations'}
          onPress={() => setActiveTab('Correlations')}
        />
        <TabButton
          title="Predictions"
          isActive={activeTab === 'Predictions'}
          onPress={() => setActiveTab('Predictions')}
        />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.reportContainer}>
          <ReportButton 
            title="Show me report" 
            onPress={() => console.log('Show report')}
          />
          <ReportButton 
            title="Send me report" 
            onPress={() => console.log('Send report')}
          />
        </View>

        <View style={styles.illustrationContainer}>
          <Image
            style={styles.illustration}
            contentFit="contain"
            source={require("../../assets/-3.png")}
          />
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteText}>
              Instead of the disease controlling you, you control it!
            </Text>
            <Image
              style={[styles.chevronIcon, { transform: [{ rotate: '0deg' }] }]}
              contentFit="cover"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../../assets/-07.png")}
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../../assets/-06.png")}
          />
          <Text style={[styles.navText, styles.navTextActive]}>Insight</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../../assets/-05.png")}
          />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Insight;