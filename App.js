import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import Hello from './screens/Hello/Hello';
import Register from './screens/Register/Register';
import Register1 from './screens/Register/Register1';
import Register2 from './screens/Register/Register2';
import Login1 from './screens/Login/Login1';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import Insight from './screens/Insight/Insight';
import Profile from './screens/Profile/Profile';
import EditDetails from './screens/EditDetails/EditDetails';
import ChangePassword from './screens/Password/ChangePassword';
import ResetPassword from './screens/Password/ResetPassword';
import VerifyPassword from './screens/Password/VerifyPassword';
import ContactSupport from './screens/ContactSupport/ContactSupport';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Hello"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#F8F9FA' },
          presentation: 'card',
        }}
      >
        {/* Auth Flow */}
        <Stack.Screen 
          name="Hello" 
          component={Hello}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
        />
        <Stack.Screen 
          name="Login1" 
          component={Login1}
        />
        <Stack.Screen 
          name="Register" 
          component={Register}
        />
        <Stack.Screen 
          name="Register1" 
          component={Register1}
        />
        <Stack.Screen 
          name="Register2" 
          component={Register2}
        />

        {/* Main Flow */}
        <Stack.Screen 
          name="Home" 
          component={Home}
        />
        <Stack.Screen 
          name="Insight" 
          component={Insight}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile}
        />
        <Stack.Screen 
          name="EditDetails" 
          component={EditDetails} 
          options={{
            presentation: 'modal',
          }}
        />

        {/* Password Management */}
        <Stack.Screen 
          name="ChangePassword" 
          component={ChangePassword}
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen 
          name="ResetPassword" 
          component={ResetPassword}
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen 
          name="VerifyPassword" 
          component={VerifyPassword}
          options={{
            presentation: 'modal',
          }}
        />

        {/* Support */}
        <Stack.Screen 
          name="ContactSupport" 
          component={ContactSupport}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}