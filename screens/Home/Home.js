// screens/Home/Home.js (simplified)
import React, { useState, useRef, useEffect } from 'react';
import { useMetrics } from '../../context/MetricsContext';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import { Image } from "expo-image";
import styles from './Home.styles';
// import { useMetrics } from '../../context/SimpleMetricsContext';
import { useAuth } from '../../context/AuthContext';

// Component imports remain the same - Group, PainScale, YesNoSelect, WeekCalendar
// Truncated for brevity - keep your existing component implementations

const Home = ({ navigation }) => {
  const { user } = useAuth();
  const { 
    selectedDate, 
    setSelectedDate, 
    currentDayMetrics,
    loading,
    saveMetrics
  } = useMetrics();
  
  // Sample form data - you can populate this from currentDayMetrics later
  const [formData, setFormData] = useState({
    ovariesPain: 0,
    headache: 4,
    dailyPain: 9,
    firstDayPeriod: 'no',
    period: 'no',
    bleeding: 0,
    stoolDescription: 4,
    multipleBowelMovements: 0,
  });
  
  const [dayCounter, setDayCounter] = useState(108);

  // Update form when current metrics change
  useEffect(() => {
    if (currentDayMetrics && currentDayMetrics.data && currentDayMetrics.data.length > 0) {
      console.log('Updating form with current day metrics');
      // This mapping would depend on your actual API data structure
      // This is just a placeholder
      
      // For now we'll keep using the default formData
    }
  }, [currentDayMetrics]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSaveData = async () => {
    // Convert form data to API format
    // This is a simplified example - adjust based on your API requirements
    const metricsData = [
      {
        id: "1", // Period
        value_id: formData.period === 'yes' ? "1" : "0",
        type: "linear"
      },
      {
        id: "2", // Ovaries pain 
        value_id: String(formData.ovariesPain),
        type: "linear"
      },
      {
        id: "3", // Headache
        value_id: String(formData.headache),
        type: "linear"
      }
      // Add more metrics based on your form data
    ];

    try {
      await saveMetrics(metricsData);
    } catch (error) {
      console.error('Failed to save metrics:', error);
      Alert.alert('Error', 'Failed to save your data. Please try again.');
    }
  };

  // Group, PainScale, and other component implementations remain the same...
  // Here's a simplified render for clarity:

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Hi {user?.user_name || 'Dana'}!</Text>
            <Text style={styles.subText}>Or your research name: {user?.user_id || 'D11'} ;)</Text>
            <Text style={styles.motivationalText}>
              Instead of the disease controlling you, you control it! ⚓
            </Text>
          </View>
          <View style={styles.dayCounter}>
            <Text style={styles.dayCounterText}>Today you'll fill day {dayCounter}</Text>
          </View>
        </View>

        <WeekCalendar 
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />

        {/* Groups */}
        <Group title="Group 1">
          <PainScale 
            label="Ovaries pain"
            value={formData.ovariesPain}
            onValueChange={(value) => setFormData(prev => ({ ...prev, ovariesPain: value }))}
          />
          <PainScale 
            label="headache"
            value={formData.headache}
            onValueChange={(value) => setFormData(prev => ({ ...prev, headache: value }))}
          />
          <PainScale 
            label="Daily pain"
            value={formData.dailyPain}
            onValueChange={(value) => setFormData(prev => ({ ...prev, dailyPain: value }))}
          />
        </Group>

        <Group title="Group 3">
          <YesNoSelect 
            label="First day of my period"
            value={formData.firstDayPeriod}
            onValueChange={(value) => setFormData(prev => ({ ...prev, firstDayPeriod: value }))}
          />
          <YesNoSelect 
            label="Period"
            value={formData.period}
            onValueChange={(value) => setFormData(prev => ({ ...prev, period: value }))}
          />
          <PainScale 
            label="Bleeding"
            max={4}
            value={formData.bleeding}
            onValueChange={(value) => setFormData(prev => ({ ...prev, bleeding: value }))}
          />
        </Group>

        <Group title="Group 5">
          <PainScale 
            label="Stool description"
            max={7}
            value={formData.stoolDescription}
            onValueChange={(value) => setFormData(prev => ({ ...prev, stoolDescription: value }))}
          />
          <PainScale 
            label="Multiple bowel movements"
            max={2}
            value={formData.multipleBowelMovements}
            onValueChange={(value) => setFormData(prev => ({ ...prev, multipleBowelMovements: value }))}
          />
        </Group>

        {/* Save Button */}
        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={handleSaveData}
          disabled={loading}
        >
          <Text style={styles.saveButtonText}>
            {loading ? 'Saving...' : 'Save My Day'}
          </Text>
        </TouchableOpacity>

        {/* Completion Message */}
        <View style={styles.completionContainer}>
          <Text style={styles.completionTitle}>I'm done!</Text>
          <Text style={styles.completionText}>
            Sooo proud of myself for staying committed
          </Text>
          <Text style={styles.untilTomorrow}>until tomorrow :)</Text>
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../../assets/-07.png")}
          />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Insight')}
        >
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../../assets/-06.png")}
          />
          <Text style={styles.navText}>Insight</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../../assets/-05.png")}
          />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Implement Group, PainScale, YesNoSelect, and WeekCalendar components here
// Use your existing implementations

// Placeholder implementations to make the file compile
const Group = ({ title, children }) => (
  <View style={styles.groupContainer}>
    <View style={styles.groupHeader}>
      <Text style={styles.groupTitle}>{title}</Text>
    </View>
    <View style={styles.groupContent}>{children}</View>
  </View>
);

const PainScale = ({ label, value, onValueChange, max = 10 }) => (
  <View style={styles.painScaleContainer}>
    <Text>{label}: {value}</Text>
    {/* Implement your actual PainScale UI here */}
  </View>
);

const YesNoSelect = ({ label, value, onValueChange }) => (
  <View style={styles.yesNoContainer}>
    <Text>{label}: {value}</Text>
    {/* Implement your actual YesNoSelect UI here */}
  </View>
);

const WeekCalendar = ({ selectedDate, onDateSelect }) => (
  <View style={styles.calendarContainer}>
    <Text>Calendar: {selectedDate.toDateString()}</Text>
    {/* Implement your actual WeekCalendar UI here */}
  </View>
);

export default Home;