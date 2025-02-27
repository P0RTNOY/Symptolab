// context/MetricsContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import { metricsService } from '../services/api';
import { useAuth } from './AuthContext';

// Create metrics context
const MetricsContext = createContext();

// Format date as YYYYMMDD
const formatDateForAPI = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

// Metrics provider component
export const MetricsProvider = ({ children }) => {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDayMetrics, setCurrentDayMetrics] = useState(null);

  // Fetch metrics when user logs in
  useEffect(() => {
    if (user?.user_id) {
      fetchUserMetrics();
    }
  }, [user]);

  // Update current day metrics when selected date changes
  useEffect(() => {
    if (metrics.length > 0) {
      updateCurrentDayMetrics();
    }
  }, [selectedDate, metrics]);

  // Fetch user metrics
  const fetchUserMetrics = async () => {
    if (!user?.user_id) {
      console.log("Cannot fetch metrics: No user ID available");
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      console.log(`Fetching metrics for user ID: ${user.user_id}`);
      const metricsData = await metricsService.getUserMetrics(user.user_id);
      console.log("Metrics data received:", metricsData ? "Data available" : "No data");
      setMetrics(metricsData || []);
      updateCurrentDayMetrics();
    } catch (error) {
      console.error('Error fetching metrics:', error);
      
      // Enhanced error logging
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        
        setError(`Failed to load metrics data. Server responded with status: ${error.response.status}`);
        Alert.alert('Error', `Failed to load metrics data. Server responded with status: ${error.response.status}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        setError('Failed to load metrics data. No response received from server.');
        Alert.alert('Error', 'Failed to load metrics data. No response received from server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up request:', error.message);
        setError(`Failed to load metrics data: ${error.message}`);
        Alert.alert('Error', `Failed to load metrics data: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Update the current day metrics based on selected date
  const updateCurrentDayMetrics = () => {
    const formattedDate = formatDateForAPI(selectedDate);
    const dayData = metrics.find(m => m.date_metric === formattedDate);
    
    if (dayData) {
      setCurrentDayMetrics(dayData);
    } else {
      // If no data exists for this date, create a placeholder
      setCurrentDayMetrics({
        date_metric: formattedDate,
        data: [] // This would typically be populated from the latest metrics template
      });
    }
  };

  // Save metrics for current day
  const saveCurrentDayMetrics = async (metricsData) => {
    if (!user?.user_id) {
      Alert.alert('Error', 'You must be logged in to save metrics.');
      return false;
    }
    
    setLoading(true);
    
    try {
      const formattedDate = formatDateForAPI(selectedDate);
      
      console.log(`Saving metrics for user ID: ${user.user_id}, date: ${formattedDate}`);
      console.log('Metrics data to save:', metricsData);
      
      // Save to API
      await metricsService.saveUserMetrics(user.user_id, formattedDate, metricsData);
      
      // Prepare the payload for local state update
      const payload = {
        date_metric: formattedDate,
        data: metricsData
      };
      
      // Update local state
      const updatedMetrics = [...metrics];
      const existingIndex = updatedMetrics.findIndex(m => m.date_metric === formattedDate);
      
      if (existingIndex >= 0) {
        updatedMetrics[existingIndex] = payload;
      } else {
        updatedMetrics.push(payload);
      }
      
      setMetrics(updatedMetrics);
      setCurrentDayMetrics(payload);
      
      return true;
    } catch (error) {
      console.error('Error saving metrics:', error);
      
      // Enhanced error logging
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        
        Alert.alert('Error', `Failed to save metrics data. Server responded with status: ${error.response.status}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        Alert.alert('Error', 'Failed to save metrics data. No response received from server.');
      } else {
        console.error('Error setting up request:', error.message);
        Alert.alert('Error', `Failed to save metrics data: ${error.message}`);
      }
      
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Export context value
  const value = {
    metrics,
    loading,
    error,
    selectedDate,
    setSelectedDate,
    currentDayMetrics,
    fetchUserMetrics,
    saveCurrentDayMetrics,
    formatDateForAPI
  };

  return (
    <MetricsContext.Provider value={value}>
      {children}
    </MetricsContext.Provider>
  );
};

// Custom hook to use the metrics context
export const useMetrics = () => {
  const context = useContext(MetricsContext);
  if (!context) {
    throw new Error('useMetrics must be used within a MetricsProvider');
  }
  return context;
};

export default MetricsContext;