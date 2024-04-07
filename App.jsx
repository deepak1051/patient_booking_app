import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AdminScreen from './src/screens/admin/AdminScreen';
import PatientScreen from './src/screens/patient/PatientScreen';
import BookingFormScreen from './src/screens/patient/BookingFormScreen';

import AddServiceScreen from './src/screens/admin/AddServiceScreen';
import AllBookingsListScreen from './src/screens/admin/AllBookingsListScreen';
import AllServicesList from './src/screens/admin/AllServicesList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* admin */}
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="AddServiceScreen" component={AddServiceScreen} />

        <Stack.Screen
          name="AllBookingsListScreen"
          component={AllBookingsListScreen}
        />

        <Stack.Screen name="AllServicesList" component={AllServicesList} />

        {/* patient */}
        <Stack.Screen name="PatientScreen" component={PatientScreen} />
        <Stack.Screen name="BookingFormScreen" component={BookingFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
