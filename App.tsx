/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, JSX, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import QRScanner from './QRScanner';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// 创建Context
export const ScanDataContext = createContext<any>(null);

function App(): JSX.Element {

  const [scanData, setScanData] = useState(null);

  return (
    <SafeAreaProvider>
      <ScanDataContext.Provider value={{ scanData, setScanData }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{
              headerShown: false,
              gestureEnabled: true, // 启用手势返回
              gestureDirection: 'horizontal', // 水平滑动
            }} />
            <Stack.Screen name="Scan" component={QRScanner} options={{ headerShown: true }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ScanDataContext.Provider>
    </SafeAreaProvider>
  );
}

export default App;
