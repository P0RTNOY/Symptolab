// services/api.js - enhanced login with debugging
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base API URL
const API_BASE_URL = 'http://129.159.150.200:5808';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authentication token to requests - with more detailed logging
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('user_token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        console.log(`Adding auth token to ${config.url}: ${token.substring(0, 10)}...`);
      } else {
        console.log(`No auth token available for request to ${config.url}`);
      }
      
      // Log full request details for debugging
      console.log('Request details:', {
        url: config.url,
        method: config.method,
        headers: config.headers,
        data: config.data
      });
    } catch (error) {
      console.error('Error adding auth token to request:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Authentication APIs
export const authService = {
  // Register a new user
  register: async (name, email, password) => {
    try {
      const response = await apiClient.post('/signin', {
        name,
        email,
        password
      });
      console.log('Register response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  // Login user with enhanced logging
  login: async (email, password) => {
    try {
      console.log(`Attempting login for ${email}`);
      const response = await apiClient.post('/login', {
        user_email: email,
        user_pass: password
      });
      
      console.log('Login successful. Full response data:', response.data);
      console.log('Response headers:', response.headers);
      
      // Check what fields are in the response
      if (response.data) {
        console.log('Response data fields:', Object.keys(response.data));
        if (response.data.user_token) {
          console.log(`Token received: ${response.data.user_token.substring(0, 10)}...`);
        } else {
          console.warn('No user_token in response data');
        }
      }
      
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
};

// Metrics APIs - try alternative authentication approaches
export const metricsService = {
  // Get user metrics with multiple auth attempts
  getUserMetrics: async (userId) => {
    try {
      console.log(`Fetching metrics for user ID: ${userId}`);
      
      // Try with authorization header and user_id in query params
      try {
        const token = await AsyncStorage.getItem('user_token');
        console.log(`Using token: ${token ? (token.substring(0, 10) + '...') : 'none'}`);
        
        // Try first approach: Bearer token + user_id in query
        const response = await axios.get(`${API_BASE_URL}/metrics/user?user_id=${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        console.log('Metrics fetch successful');
        return response.data;
      } catch (error) {
        console.warn('First metrics fetch approach failed:', error.message);
        
        // Try second approach: user_token as a parameter
        const token = await AsyncStorage.getItem('user_token');
        const response = await axios.get(`${API_BASE_URL}/metrics/user?user_id=${userId}&user_token=${token}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        console.log('Second metrics fetch approach successful');
        return response.data;
      }
    } catch (error) {
      console.error('All metrics fetch approaches failed:', error);
      throw error;
    }
  },

  // Save user metrics with multiple auth attempts
  saveUserMetrics: async (userId, dateMetric, metricsData) => {
    try {
      const payload = {
        user_id: userId,
        date_metric: dateMetric,
        data: metricsData
      };
      
      const token = await AsyncStorage.getItem('user_token');
      console.log(`Using token for save metrics: ${token ? (token.substring(0, 10) + '...') : 'none'}`);
      
      // Try first approach: Token in Authorization header
      try {
        const response = await axios.post(`${API_BASE_URL}/metrics/save`, payload, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        console.log('Metrics save successful');
        return response.data;
      } catch (error) {
        console.warn('First save metrics approach failed:', error.message);
        
        // Try second approach: user_token in payload
        payload.user_token = token;
        const response = await axios.post(`${API_BASE_URL}/metrics/save`, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Second save metrics approach successful');
        return response.data;
      }
    } catch (error) {
      console.error('All save metrics approaches failed:', error);
      throw error;
    }
  }
};

// Storage utilities for token and user info
export const storageService = {
  // Save user session
  saveUserSession: async (userData) => {
    try {
      await AsyncStorage.setItem('user_token', userData.user_token);
      await AsyncStorage.setItem('user_id', String(userData.user_id));
      await AsyncStorage.setItem('user_name', userData.user_name || '');
      
      console.log('User session saved:', {
        token: userData.user_token ? (userData.user_token.substring(0, 10) + '...') : 'none',
        id: userData.user_id,
        name: userData.user_name || 'not provided'
      });
      
      return true;
    } catch (error) {
      console.error('Error saving user session:', error);
      return false;
    }
  },

  // Get user session
  getUserSession: async () => {
    try {
      const token = await AsyncStorage.getItem('user_token');
      const userId = await AsyncStorage.getItem('user_id');
      const userName = await AsyncStorage.getItem('user_name');
      
      console.log('Retrieved user session:', {
        token: token ? (token.substring(0, 10) + '...') : 'none',
        id: userId,
        name: userName || 'not available'
      });
      
      if (token && userId) {
        return {
          user_token: token,
          user_id: parseInt(userId),
          user_name: userName
        };
      }
      return null;
    } catch (error) {
      console.error('Error getting user session:', error);
      return null;
    }
  },

  // Clear user session (logout)
  clearUserSession: async () => {
    try {
      await AsyncStorage.removeItem('user_token');
      await AsyncStorage.removeItem('user_id');
      await AsyncStorage.removeItem('user_name');
      console.log('User session cleared');
      return true;
    } catch (error) {
      console.error('Error clearing user session:', error);
      return false;
    }
  }
};

export default {
  authService,
  metricsService,
  storageService
};