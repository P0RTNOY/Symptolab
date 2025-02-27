// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import contexts
import { useAuth } from '../context/SimpleAuthContext';

// Import screens - with correct SplashScreen path
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Hello from '../screens/Hello/Hello';
import Register from '../screens/Register/Register';
import Login1 from '../screens/Login/Login1';
import Profile from '../screens/Profile/Profile';
import EditDetails from '../screens/EditDetails/EditDetails';
import ChangePassword from '../screens/Password/ChangePassword';
import ResetPassword from '../screens/Password/ResetPassword';
import VerifyPassword from '../screens/Password/VerifyPassword';
import ContactSupport from '../screens/ContactSupport/ContactSupport';
import Home from '../screens/Home/Home';
import Insight from '../screens/Insight/Insight';

const Stack = createStackNavigator();

// Navigation based on auth state
const AppNavigator = () => {
  const { user, loading, initialized } = useAuth();

  // Show splash screen while checking auth
  if (!initialized || loading) {
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
        {user ? (
          // Authenticated screens
          [
            <Stack.Screen key="home" name="Home" component={Home} />,
            <Stack.Screen key="profile" name="Profile" component={Profile} />,
            <Stack.Screen key="insight" name="Insight" component={Insight} />,
            <Stack.Screen key="settings" name="Settings" component={Profile} />,
            <Stack.Screen 
              key="editDetails"
              name="EditDetails" 
              component={EditDetails} 
              options={{ presentation: 'modal' }}
            />,
            <Stack.Screen 
              key="changePassword"
              name="ChangePassword" 
              component={ChangePassword}
              options={{ presentation: 'modal' }}
            />,
            <Stack.Screen 
              key="contactSupport"
              name="ContactSupport" 
              component={ContactSupport}
              options={{ presentation: 'modal' }}
            />
          ]
        ) : (
          // Non-authenticated screens
          [
            <Stack.Screen key="hello" name="Hello" component={Hello} />,
            <Stack.Screen key="login" name="Login1" component={Login1} />,
            <Stack.Screen key="register" name="Register" component={Register} />,
            <Stack.Screen 
              key="resetPassword"
              name="ResetPassword" 
              component={ResetPassword}
              options={{ presentation: 'modal' }}
            />,
            <Stack.Screen 
              key="verifyPassword"
              name="VerifyPassword" 
              component={VerifyPassword}
              options={{ presentation: 'modal' }}
            />
          ]
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;