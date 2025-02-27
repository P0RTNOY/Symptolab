// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import contexts
import { AuthProvider, useAuth } from './context/AuthContext';
import { MetricsProvider } from './context/MetricsContext';

// Import screens
import SplashScreen from './screens/SplashScreen/SplashScreen';
import Hello from './screens/Hello/Hello';
import Register from './screens/Register/Register';
import Register1 from './screens/Register/Register1';
import Register2 from './screens/Register/Register2';
import Login1 from './screens/Login/Login1';
import Profile from './screens/Profile/Profile';
import EditDetails from './screens/EditDetails/EditDetails';
import ChangePassword from './screens/Password/ChangePassword';
import ResetPassword from './screens/Password/ResetPassword';
import VerifyPassword from './screens/Password/VerifyPassword';
import ContactSupport from './screens/ContactSupport/ContactSupport';
import Home from './screens/Home/Home';
import Insight from './screens/Insight/Insight';

const Stack = createStackNavigator();

// Navigation configuration
const AppNavigator = () => {
  const { user, loading } = useAuth();

  // Show splash screen while checking authentication
  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? "Home" : "Hello"}
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#F8F9FA' },
          presentation: 'card',
        }}
      >
        {/* Conditionally render screens based on authentication */}
        {user ? (
          // Authenticated screens
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Insight" component={Insight} />
            <Stack.Screen 
              name="EditDetails" 
              component={EditDetails} 
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen 
              name="ChangePassword" 
              component={ChangePassword}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen 
              name="ContactSupport" 
              component={ContactSupport}
              options={{ presentation: 'modal' }}
            />
          </>
        ) : (
          // Authentication screens
          <>
            <Stack.Screen name="Hello" component={Hello} />
            <Stack.Screen name="Login1" component={Login1} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Register1" component={Register1} />
            <Stack.Screen name="Register2" component={Register2} />
            <Stack.Screen 
              name="ResetPassword" 
              component={ResetPassword}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen 
              name="VerifyPassword" 
              component={VerifyPassword}
              options={{ presentation: 'modal' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Main App component with providers
export default function App() {
  return (
    <AuthProvider>
      <MetricsProvider>
        <AppNavigator />
      </MetricsProvider>
    </AuthProvider>
  );
}