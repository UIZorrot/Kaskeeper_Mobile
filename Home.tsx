/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import { request, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions';
import { NativeModules } from 'react-native';

const appVersion = NativeModules.RNDeviceInfo.appVersion;

import {
  Alert,
  BackHandler,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';
import { ScanDataContext } from './App';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';

const Home = memo(({ navigation, route }: {
  navigation?: any,
  route?: any
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { scanData } = useContext(ScanDataContext);
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();
  const canGoBack = useRef(false);

  useEffect(() => {
    // 当全局状态更新时，执行相关操作
    if (scanData) {
      console.log('从B接收到的参数:', scanData);
      executeNativeCallback(scanData.callbackId, 'success', {
        result: scanData.address,
      });
    }
  }, [scanData]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    paddingTop: insets.top
    // height: 600,
  };

  const htmlFilePath = Platform.OS === 'android'
    ? 'file:///android_asset/index.html'
    : 'Web.bundle/index.html';
  const webViewRef = useRef<WebView | null>(null);

  // 执行原生回调
  const executeNativeCallback = (callbackId: string, action: 'success' | 'fail', payload: any) => {
    const script = `
      window.NativeCallbacks.execute('${callbackId}', '${action}', ${JSON.stringify(payload)});
    `;
    webViewRef?.current?.injectJavaScript(script);
  };

  // 处理 WebView 发送的消息
  const handleMessage = async (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      const { callbackId, action, payload } = data || {};
      switch (action) {
        case 'openScan':
          const status = await request(PERMISSIONS.ANDROID.CAMERA);
          if (status === RESULTS.BLOCKED) {
            console.log('Camera permission blocked');
            return Alert.alert(
              'Permission Blocked',
              'You have permanently denied camera permission. Please go to settings to enable it.',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'Open Settings',
                  onPress: () => openSettings(),
                },
              ]
            );
          }
          if (status === RESULTS.GRANTED) {
            navigation.navigate('Scan', { callbackId })
          }
          break;
        default:
          console.log('default', data);
          break;
      }
    } catch (error) {
      console.log('handleMessage', error);
    }
  };

  useEffect(() => {
    if (route.params) {
      executeNativeCallback(route.params.callbackId, 'success', {
        result: route.params.address,
      });
      // 处理返回时携带的参数
    }
  }, [route.params]);


  useEffect(() => {
    const backAction = () => {
      // 阻止返回键操作
      if (isFocused && webViewRef && webViewRef.current) {
        if (!canGoBack.current) return false
        webViewRef.current.goBack(); // 尝试 WebView 返回
        return true; // 阻止默认返回行为
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [isFocused]);

  return <SafeAreaView style={backgroundStyle}>
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    <WebView
      ref={webViewRef}
      originWhitelist={['*']}
      javaScriptEnabled={true}
      key={'webView'}
      source={{
        uri: htmlFilePath,
        // uri: 'http://192.168.3.116:8080',
      }}
      onError={(error) => {
        console.log('onError', error);
      }}
      onLoadEnd={(e) => {
        console.log('onLoadEnd', e);
        // 注入 JavaScript 代码，将版本号传递给网页
        const script = `
          window.appVersion = '${appVersion}';
          console.log('App Version in WebView:', window.appVersion);
        `;
        webViewRef?.current?.injectJavaScript(script);
      }}
      renderError={(errorDomain, errorCode, errorDesc) => (
        <View>
          <Text>
            An error occurred while loading the web page: {errorDomain} {errorCode}
          </Text>
          <Text>{errorDesc || 'Unknown error'}</Text>
        </View>
      )}
      onMessage={e => handleMessage(e)}
      webviewDebuggingEnabled={true}
      javaScriptCanOpenWindowsAutomatically={true}
      domStorageEnabled={true}
      allowFileAccess={true}
      allowFileAccessFromFileURLs={true}
      allowUniversalAccessFromFileURLs={true}
      style={{ flex: 1 }}
      onNavigationStateChange={(navState) => {
        canGoBack.current = navState.canGoBack; // 更新是否可以后退
      }}
    />
  </SafeAreaView>;
});

export default Home;
