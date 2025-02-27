import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  PanResponder,
  Dimensions,
} from 'react-native';
import { Image } from "expo-image";
import styles from './Home.styles';

const { width } = Dimensions.get('window');

const Group = ({ title, children }) => (
  <View style={styles.groupContainer}>
    <View style={styles.groupHeader}>
      <Text style={styles.groupTitle}>{title}</Text>
    </View>
    <View style={styles.groupContent}>
      {children}
    </View>
  </View>
);

const PainScale = ({ label, value, onValueChange, max = 10, showLabels = true }) => {
  const sliderRef = useRef(null);
  
  const handleSliderPress = (event) => {
    if (sliderRef.current) {
      sliderRef.current.measure((x, y, width, height, pageX, pageY) => {
        const touchX = event.nativeEvent.pageX - pageX;
        const percentage = Math.min(Math.max(touchX / width, 0), 1);
        const newValue = Math.round(percentage * max);
        onValueChange(newValue);
      });
    }
  };

  return (
    <View style={styles.painScaleContainer}>
      <Text style={styles.painScaleLabel}>{label}</Text>
      <Text style={styles.painScaleRange}>0 no pain - {max} worst pain</Text>
      <TouchableOpacity 
        activeOpacity={1}
        onPress={handleSliderPress}
      >
        <View 
          ref={sliderRef}
          style={styles.sliderContainer}
        >
          <View style={styles.slider}>
            <View style={styles.sliderTrack} />
            <View 
              style={[
                styles.sliderThumb,
                { left: `${(value / max) * 100}%` }
              ]} 
            />
          </View>
          {showLabels && (
            <View style={styles.sliderLabels}>
              {Array.from({ length: max + 1 }).map((_, i) => (
                <Text key={i} style={styles.sliderLabel}>{i}</Text>
              ))}
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const YesNoSelect = ({ label, value, onValueChange }) => (
  <View style={styles.yesNoContainer}>
    <Text style={styles.yesNoLabel}>{label}</Text>
    <Text style={styles.yesNoSubtitle}>Select yes/no</Text>
    <View style={styles.yesNoOptions}>
      <TouchableOpacity 
        style={[styles.optionButton, value === 'yes' && styles.optionButtonSelected]}
        onPress={() => onValueChange('yes')}
      >
        <Text style={styles.optionText}>yes</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.optionButton, value === 'no' && styles.optionButtonSelected]}
        onPress={() => onValueChange('no')}
      >
        <Text style={styles.optionText}>no</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const WeekCalendar = ({ selectedDate, onDateSelect }) => {
  const currentDate = new Date();
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - 3); // Show 3 days before current date

  const dates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return date;
  });

  const getDayName = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
  };

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.daysContainer}>
        {dates.map((date) => {
          const day = getDayName(date);
          const dateNum = date.getDate();
          const isSelected = selectedDate && 
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth();
          const isToday = date.getDate() === currentDate.getDate() &&
            date.getMonth() === currentDate.getMonth();

          return (
            <TouchableOpacity 
              key={dateNum}
              style={styles.dayColumn}
              onPress={() => onDateSelect(date)}
            >
              <Text style={styles.dayText}>{day}</Text>
              <View style={[
                styles.dateCircle,
                isSelected && styles.selectedDate,
                isToday && styles.currentDate,
              ]}>
                <Text style={[
                  styles.dateText,
                  (isSelected || isToday) && styles.selectedDateText
                ]}>{dateNum}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
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

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Here you would typically load the form data for the selected date
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Hi Dana!</Text>
            <Text style={styles.subText}>Or your research name: D11 ;)</Text>
            <Text style={styles.motivationalText}>
              Instead of the disease controlling you, you control it! ⚓
            </Text>
          </View>
          <View style={styles.dayCounter}>
            <Text style={styles.dayCounterText}>Today you'll fill day 108</Text>
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

export default Home;