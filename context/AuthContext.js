// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService, storageService } from '../services/api';

// Create the auth context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const userData = await storageService.getUserSession();
        if (userData) {
          setUser(userData);
        }
      } catch (error) {
        console.error('Session restore error:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUserSession();
  }, []);

  // Register a new user
  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await authService.register(name, email, password);
      
      if (response === 'New User Added') {
        // Auto-login after successful registration
        return await login(email, password);
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      Alert.alert('Registration Error', error.message || 'Failed to register. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (email, password) => {
    setLoading(true);
    try {
      const userData = await authService.login(email, password);
      
      if (userData?.user_token) {
        // Save to AsyncStorage
        await storageService.saveUserSession(userData);
        
        // Update context state
        setUser(userData);
        return true;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Login Error', error.message || 'Invalid email or password.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    setLoading(true);
    try {
      await storageService.clearUserSession();
      setUser(null);
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Provide auth context value
  const value = {
    user,
    loading,
    register,
    login,
    logout,
    isLoggedIn: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;