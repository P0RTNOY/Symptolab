// context/DirectAuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import api from '../services/directApi';

// Create auth context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  // Check for existing user session on startup
  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        const userData = await api.getCurrentUser();
        if (userData) {
          console.log('User session restored:', userData.user_id);
          setUser(userData);
        }
      } catch (error) {
        console.error('Failed to restore user session:', error);
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    checkUser();
  }, []);

  // Register new user
  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const result = await api.register(name, email, password);
      
      if (result === 'New User Added') {
        console.log('Registration successful, proceeding to login');
        // If registration successful, login automatically
        return await login(email, password);
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      Alert.alert('Registration Error', error.message || 'Failed to register');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (email, password) => {
    setLoading(true);
    try {
      const userData = await api.login(email, password);
      
      if (userData && userData.user_token) {
        console.log('Login successful, setting user state');
        setUser(userData);
        return true;
      } else {
        console.error('Invalid login response:', userData);
        throw new Error('Invalid login response');
      }
    } catch (error) {
      console.error('Login error in context:', error);
      Alert.alert('Login Error', error.message || 'Failed to login');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    setLoading(true);
    try {
      await api.logout();
      setUser(null);
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Context value
  const value = {
    user,
    loading,
    initialized,
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